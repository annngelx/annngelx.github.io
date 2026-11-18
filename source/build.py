"""Build the static site from content/ into ../site.

Each essay is content/<slug>.md (English) and, optionally, content/<slug>.zh.md (Chinese).
Run:  python3 build.py
"""
import re, pathlib, markdown
import html as html_lib

ROOT = pathlib.Path(__file__).parent
SITE = ROOT.parent / "site"

# ---------- settings ----------
AUTHOR = "Angel Xu"
# Full address of the published site, no trailing slash, for example "https://angelxu.github.io"
# or "https://yourdomain.com". Optional: when set, pages get canonical and share addresses.
SITE_URL = "https://angelxu.ai"
# Profile links, shown in the About section and the footer of every page. A link appears once its address is filled in.
LINKS = [("@angel_flowstate on X", "https://x.com/angel_flowstate"), ("LinkedIn", "")]
ABOUT = ("Angel Xu is the founder and CEO of Spatial Superintelligence Inc. "
         "The essays here cover robotics and physical AI, where technology is heading, and the world at large.")
LEDE = "Essays on robotics and physical AI, where technology is heading, and the world at large."

# What an essay can be filed under: the label appears beside its date on the home page. Add a line to open a topic.
TOPICS = {
    "robotics": dict(en="Robotics and physical AI", zh="机器人与物理 AI"),
    "tech": dict(en="Technology trends", zh="科技趋势"),
    "world": dict(en="The world at large", zh="世界观察"),
}

ARTICLES = [
    dict(slug="agentic-robotics", date="2026-11-17", topic="robotics",
         en=dict(title="How robots become agentic: four approaches",
                 dek="Layered orchestration, code as policy, constraint-mediated generation and direct control: what each does, the evidence so far, and where the lines blur."),
         zh=dict(title="How robots become agentic: four approaches", title_lang="en",
                 dek="分层编排、Code as policy、用约束和优化目标生成动作、直接控制：四种做法分别怎么工作，目前有哪些证据，彼此又有哪些交叉。")),
]

LANGS = {
    "en": dict(tag="en", name="English", dir="", locale="en_US"),
    "zh": dict(tag="zh-Hans", name="中文", dir="zh/", locale="zh_CN"),
}
MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

# every interface string, per language
STR = {
    "en": dict(skip="Skip to the essay", writing="Writing", about="About", site_nav="Site", read="{n}-minute read",
               rail="Article navigation", language="Language", contents="Contents", share="Share", hide="Hide the sidebar",
               parts="Show the parts of {t}", progress="Reading progress", hint="Press <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> to scroll",
               copy="Copy article link", copied="Link copied", copy_fail="Copy it from the address bar", top="Back to title &uarr;",
               swipe="Swipe sideways to see all four."),
    "zh": dict(skip="跳到正文", writing="文章", about="关于", site_nav="站点", read="约 {n} 分钟读完",
               rail="文章导航", language="语言", contents="目录", share="分享", hide="收起侧栏",
               parts="展开“{t}”的小节", progress="阅读进度", hint="按 <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> 滚动阅读",
               copy="复制文章链接", copied="链接已复制", copy_fail="请从地址栏复制链接", top="回到标题 &uarr;",
               swipe="左右滑动，可看全四种做法。"),
}

def page_path(slug, lang):
    """Site-relative address of an essay, e.g. writing/<slug>/ or zh/writing/<slug>/."""
    return f"{LANGS[lang]['dir']}writing/{slug}/"

def up(path):
    """Relative prefix that leads from a page at `path` back to the site root."""
    return "../" * path.count("/")

def human_date(iso, lang):
    y, m, d = (int(x) for x in iso.split("-"))
    return f"{y}年{m}月{d}日" if lang == "zh" else f"{d} {MONTHS[m - 1]} {y}"

def read_minutes(md_text, lang):
    text = re.sub(r"<[^>]+>|\[|\]\([^)]*\)|\{#[^}]*\}", " ", md_text)
    cjk = len(re.findall(r"[一-鿿]", text))
    words = len(re.sub(r"[一-鿿　-〿＀-￯]", " ", text).split())
    return max(1, round(cjk / 400 + words / 230))          # about 400 characters or 230 words a minute

# ---------- shared page parts ----------
def head(title, desc, prefix, lang="en", kind="website", path="", alternates=None, extra="", early=""):
    L = LANGS[lang]
    more = [f'<meta property="og:locale" content="{L["locale"]}">']
    if SITE_URL:
        more.append(f'<link rel="canonical" href="{SITE_URL}/{path}">')
        more.append(f'<meta property="og:url" content="{SITE_URL}/{path}">')
    for other, other_path in (alternates or {}).items():
        href = f"{SITE_URL}/{other_path}" if SITE_URL else prefix + other_path
        more.append(f'<link rel="alternate" hreflang="{LANGS[other]["tag"]}" href="{href}">')
    return f"""<!doctype html>
<html lang="{L['tag']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="{kind}">
<meta name="twitter:card" content="summary">
{chr(10).join(more)}
<link rel="icon" href="{prefix}favicon.svg" type="image/svg+xml">
{early}
<link rel="preload" href="{prefix}assets/fonts/archivo-latin-standard-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{prefix}assets/css/site.css">{extra}
</head>"""

def lang_link(prefix, lang, slug, cls=""):
    """Link to the same essay in language `lang`."""
    L = LANGS[lang]
    return (f'<a{cls} href="{prefix}{page_path(slug, lang)}" lang="{L["tag"]}" hreflang="{L["tag"]}" data-lang-switch>{L["name"]}</a>')

def bar(prefix, lang="en", home_link=True, other=None):
    """Top bar. `other` is (language, slug) when this page exists in a second language."""
    S = STR[lang]
    name = f'<a class="home" href="{prefix}">{AUTHOR}</a>' if home_link else f'<span class="home">{AUTHOR}</span>'
    switch = lang_link(prefix, other[0], other[1], ' class="lang"') if other else ""
    return f"""<header class="bar">
{name}
<nav aria-label="{S['site_nav']}"><a href="{prefix}#writing">{S['writing']}</a><a href="{prefix}#about">{S['about']}</a>{switch}</nav>
</header>"""

def profile_links(cls="links", *, compact=False):
    x_icon = '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>'
    items = []
    for name, url in LINKS:
        if not url:
            continue
        label = html_lib.escape(name, quote=True)
        href = html_lib.escape(url, quote=True)
        is_x = url.startswith("https://x.com/")
        if compact and is_x:
            # A quiet social shortcut in the footer; About carries the handle.
            link = f'<a class="social-link" href="{href}" rel="me noopener" aria-label="{label}" title="{label}">{x_icon}</a>'
        else:
            text = html_lib.escape(name.removesuffix(" on X") if is_x else name)
            link = f'<a href="{href}" rel="me noopener" aria-label="{label}">{x_icon if is_x else ""}<span>{text}</span></a>'
        items.append(f'<li>{link}</li>')
    return f'<ul class="{cls}">{"".join(items)}</ul>' if items else ""

def footer(lang="en"):
    links = profile_links("foot-links", compact=True)
    return f"""<footer class="foot">
<span>&copy; 2026 {AUTHOR}</span>{chr(10) + links if links else ""}
</footer>"""

CAT_AVATAR = """<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="32" fill="#234b46"/>
<path d="M13.5 31 16.5 10.5 30 20z M50.5 31 47.5 10.5 34 20z" fill="#fff4e8"/><path d="M18.6 24.5 19.9 15.6 26 20z M45.4 24.5 44.1 15.6 38 20z" fill="#ffa9bd"/>
<ellipse cx="32" cy="35.5" rx="20.5" ry="16.5" fill="#fff4e8"/>
<ellipse cx="24.4" cy="34.4" rx="2.7" ry="3.7" fill="#1b1930"/><ellipse cx="39.6" cy="34.4" rx="2.7" ry="3.7" fill="#1b1930"/><circle cx="23.5" cy="33" r=".95" fill="#fff"/><circle cx="38.7" cy="33" r=".95" fill="#fff"/>
<path d="M30.5 38.6h3l-1.5 1.7z" fill="#ffa9bd"/><path d="M32 40.3q-1.6 2.4-3.7.9M32 40.3q1.6 2.4 3.7.9" fill="none" stroke="#1b1930" stroke-width=".9" stroke-linecap="round"/>
<ellipse cx="18.3" cy="40" rx="3.1" ry="1.8" fill="#ffa9bd" opacity=".6"/><ellipse cx="45.7" cy="40" rx="3.1" ry="1.8" fill="#ffa9bd" opacity=".6"/>
<path d="M11 50q21 9.5 42 0l2 9q-23 11-46 0z" fill="#e2bd5a"/></svg>"""

# ---------- article sidebar ----------
RAIL_HEAD = """
<script>document.documentElement.classList.add("js");try{if(localStorage.getItem("rail")==="closed")document.documentElement.classList.add("rail-closed")}catch(e){}</script>"""

def rail(prefix, lang, slug, title, toc, langs, title_lang=None):
    """Sidebar for essay pages: site name, essay title, language switch, contents tree, reading progress, share."""
    S = STR[lang]
    esc = lambda t: html_lib.escape(html_lib.unescape(t["name"]))
    def items(tokens):
        out = []
        for t in tokens:
            kids = t.get("children") or []
            if kids:
                out.append(f'<li class="has-kids"><a href="#{t["id"]}">{esc(t)}</a>'
                           f'<button class="kids-toggle" type="button" aria-expanded="false" aria-label="{S["parts"].format(t=esc(t))}"></button>'
                           f'<ol>{items(kids)}</ol></li>')
            else:
                out.append(f'<li><a href="#{t["id"]}">{esc(t)}</a></li>')
        return "".join(out)
    switch = ""
    if len(langs) > 1:
        parts = [f'<span aria-current="true">{LANGS[l]["name"]}</span>' if l == lang else lang_link(prefix, l, slug) for l in langs]
        switch = f'\n<p class="rail-lang" aria-label="{S["language"]}">{" / ".join(parts)}</p>'
    return f"""<aside class="rail" id="rail" aria-label="{S['rail']}">
<a class="rail-brand" href="{prefix}"><span class="rail-avatar">{CAT_AVATAR}</span><span class="rail-name">{AUTHOR}</span></a>
<p class="rail-title"{f' lang="{title_lang}"' if title_lang else ''}>{title}</p>{switch}
<div class="rail-head"><p class="rail-label" id="rail-contents">{S['contents']}</p><button class="rail-close" type="button" aria-label="{S['hide']}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>
<nav class="rail-tree" aria-labelledby="rail-contents"><ol>{items(toc)}</ol></nav>
<div class="rail-progress"><span class="rail-meter" role="progressbar" aria-label="{S['progress']}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="fill"></span></span><span class="pct" data-progress>0%</span></div>
<p class="rail-hint">{S['hint']}</p>
<p class="rail-label">{S['share']}</p>
<ul class="rail-actions">
<li><button type="button" data-copy data-done="{S['copied']}" data-fail="{S['copy_fail']}"><span aria-live="polite">{S['copy']}</span></button></li>
<li><a href="#top">{S['top']}</a></li>
</ul>
</aside>
<button class="rail-open" type="button" aria-controls="rail" aria-expanded="false">{S['contents']} <span data-progress>0%</span></button>
<div class="rail-scrim" hidden></div>"""

RAIL_SCRIPT = """<script>
(() => {
  const root = document.documentElement, rail = document.getElementById("rail"), main = document.getElementById("main");
  if (!rail || !main) return;
  const wide = matchMedia("(min-width: 72rem)");
  const openBtn = document.querySelector(".rail-open"), closeBtn = rail.querySelector(".rail-close"), scrim = document.querySelector(".rail-scrim");
  const background = [...document.body.children].filter((node) => ![rail, openBtn, scrim].includes(node) && node.tagName !== "SCRIPT");
  const originalInert = new Map(background.map((node) => [node, node.inert]));
  let modalActive = false, previousOverflow;
  const isOpen = () => (wide.matches ? !root.classList.contains("rail-closed") : root.classList.contains("rail-shown"));
  const sync = () => {
    const o = isOpen(), modal = o && !wide.matches;
    openBtn.setAttribute("aria-expanded", String(o)); rail.inert = !o; scrim.hidden = !modal;
    if (modal) { rail.setAttribute("role", "dialog"); rail.setAttribute("aria-modal", "true"); }
    else { rail.removeAttribute("role"); rail.removeAttribute("aria-modal"); }
    if (modal !== modalActive) {
      background.forEach((node) => { node.inert = modal || originalInert.get(node); });
      if (modal) {
        previousOverflow = [root.style.overflow, document.body.style.overflow];
        root.style.overflow = document.body.style.overflow = "hidden";
      } else {
        [root.style.overflow, document.body.style.overflow] = previousOverflow;
      }
      modalActive = modal;
    }
  };
  const setOpen = (o, focus) => {
    if (wide.matches) { root.classList.toggle("rail-closed", !o); try { localStorage.setItem("rail", o ? "open" : "closed"); } catch (e) {} }
    else root.classList.toggle("rail-shown", o);
    root.classList.remove("rail-away");
    sync(); if (focus) (o ? closeBtn : openBtn).focus({ preventScroll: true });
  };
  openBtn.addEventListener("click", () => setOpen(true, true));
  closeBtn.addEventListener("click", () => setOpen(false, true));
  scrim.addEventListener("click", () => setOpen(false, true));
  addEventListener("keydown", (e) => {
    if (!modalActive) return;
    if (e.key === "Escape") { e.preventDefault(); setOpen(false, true); return; }
    if (e.key !== "Tab") return;
    const focusable = [...rail.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')].filter((node) => node.getClientRects().length);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (!rail.contains(document.activeElement) || (e.shiftKey && document.activeElement === first)) {
      e.preventDefault(); (e.shiftKey ? last : first).focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
  wide.addEventListener("change", () => {
    const active = document.activeElement;
    root.classList.remove("rail-shown", "rail-away"); sync();
    if (!isOpen() && rail.contains(active)) openBtn.focus({ preventScroll: true });
    else if (isOpen() && active === openBtn) closeBtn.focus({ preventScroll: true });
  });

  // contents tree: follow the reader, open the branch they are in
  const tree = rail.querySelector(".rail-tree"), links = [...tree.querySelectorAll("a")];
  const heads = links.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))));
  const fill = rail.querySelector(".fill"), meter = rail.querySelector(".rail-meter"), outs = document.querySelectorAll("[data-progress]");
  const setBranch = (li, open) => { li.classList.toggle("is-open", open); li.querySelector(".kids-toggle").setAttribute("aria-expanded", String(open)); };
  tree.querySelectorAll(".kids-toggle").forEach((b) => b.addEventListener("click", () => setBranch(b.parentElement, !b.parentElement.classList.contains("is-open"))));
  rail.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (!target) return;
    if (!wide.matches) setOpen(false, false);
    target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true });
  }));
  const more = () => tree.classList.toggle("has-more", tree.scrollTop + tree.clientHeight < tree.scrollHeight - 6);
  tree.addEventListener("scroll", more, { passive: true });
  let current = -2, queued = false;
  const update = () => {
    queued = false;
    const end = main.offsetTop + main.offsetHeight - innerHeight, pct = Math.round(Math.max(0, Math.min(1, scrollY / Math.max(1, end))) * 100);
    fill.style.width = pct + "%"; meter.setAttribute("aria-valuenow", pct); outs.forEach((o) => { o.textContent = pct + "%"; });
    let idx = -1; const line = innerHeight * 0.3;
    heads.forEach((h, i) => { if (h && h.getBoundingClientRect().top <= line) idx = i; });
    if (idx === current) return;
    current = idx;
    links.forEach((a, i) => { a.classList.toggle("is-current", i === idx); if (i === idx) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current"); });
    const a = links[idx];
    if (a) {
      const branch = a.closest("li.has-kids"); if (branch) setBranch(branch, true);
      const top = a.getBoundingClientRect().top - tree.getBoundingClientRect().top + tree.scrollTop, bottom = top + a.offsetHeight;      // keep the current line in view inside the list
      if (top < tree.scrollTop + 8) tree.scrollTop = top - 8; else if (bottom > tree.scrollTop + tree.clientHeight - 8) tree.scrollTop = bottom - tree.clientHeight + 8;
    }
    more();
  };
  const ask = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  addEventListener("scroll", ask, { passive: true }); addEventListener("resize", ask);

  // the floating contents button steps aside while the reader scrolls down, and comes back on the way up
  let lastY = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY, d = y - lastY; if (Math.abs(d) < 8) return;
    root.classList.toggle("rail-away", d > 0 && y > 320); lastY = y;
  }, { passive: true });

  // switching language keeps the reader at the same section (headings share ids across languages)
  document.querySelectorAll("[data-lang-switch]").forEach((a) => a.addEventListener("click", () => {
    const here = links[current]; if (here) a.href = a.href.split("#")[0] + here.hash;
  }));

  // share
  const copy = rail.querySelector("[data-copy]"), label = copy.firstElementChild, idle = label.textContent; let timer;
  copy.addEventListener("click", async () => {
    const url = location.origin + location.pathname; let ok = false;
    try { await navigator.clipboard.writeText(url); ok = true; }
    catch (e) { const t = document.createElement("textarea"); t.value = url; t.style.cssText = "position:fixed;opacity:0"; rail.appendChild(t); t.select(); try { ok = document.execCommand("copy"); } catch (e2) {} t.remove(); copy.focus({ preventScroll: true }); }
    label.textContent = ok ? copy.dataset.done : copy.dataset.fail;
    clearTimeout(timer); timer = setTimeout(() => { label.textContent = idle; }, 2400);
  });
  sync(); update();
})();
</script>"""

# ---------- the four-approaches diagram (static SVG) ----------
DIAGRAM = {
    "en": dict(top="At run time: how decisions reach the motors",
               names=["1. Layered", "2. Code as policy", "3. Constraints", "4. Direct control"],
               outs=[["subgoals, marks"], ["a program"], ["constraints,", "value maps, costs"], None],
               mids=[("Learned skills", "VLAs, WAMs, RL"), ("Program", "+ controllers"), ("Optimizer", "solves for motion"), None],
               model="Reasoning model", motor="motor commands", chunks=["motion chunks,", "one per tool call"], robot="Robot",
               beyond="Beyond run time: agents that improve robots, on top of any approach",
               self_="Self-improvement: lasting changes to policies, rewards, code and skills",
               data="Data and world generation: tasks, labels, scenes, digital twins, benchmarks",
               label="Four run-time approaches differ in what sits between the reasoning model and the robot; self-improvement and data and world generation sit on top of any of them",
               caption="From left to right, less sits between the reasoning model and the motors, until in direct control nothing does."),
    "zh": dict(top="runtime：模型的决策如何变成电机指令",
               names=["1. 分层编排", "2. Code as policy", "3. 约束与优化目标", "4. 直接控制"],
               outs=[["子目标、标记"], ["一段程序"], ["约束、value maps、", "代价函数"], None],
               mids=[("训练得到的 skill", "VLA、WAM、RL"), ("程序", "+ 控制器"), ("优化器", "求解具体动作"), None],
               model="推理模型", motor="运动指令", chunks=["一小段动作", "每次工具调用输出一段"], robot="机器人",
               beyond="runtime 之外：agent 如何改进机器人（可用于以上任一种做法）",
               self_="自我改进：更新 policy、奖励、代码和 skill，并保留改进结果",
               data="数据和环境生成：任务、标注、场景、数字孪生、benchmark",
               label="四种方法的区别在于，推理模型的输出经过哪些环节才变成机器人动作。自我改进、数据和环境生成可以用于以上任一种方法。",
               caption="从左往右，推理模型与电机之间的中间层越来越少；直接控制省去了这些中间层。"),
}

def diagram(lang="en"):
    D = DIAGRAM[lang]
    W, cols = 160, [32, 208, 384, 560]
    ink, quiet, edge = "var(--ink)", "var(--muted)", "#8a8fa3"
    s = []
    def box(x, y, h, main=False):
        if main:
            return f'<rect x="{x}" y="{y}" width="{W}" height="{h}" rx="6" fill="var(--tint)" stroke="var(--field)" stroke-width="2"/>'
        return f'<rect x="{x}" y="{y}" width="{W}" height="{h}" rx="6" fill="#fff" stroke="{edge}" stroke-width="1.25"/>'
    def arr(x, y1, y2):
        return f'<path d="M{x} {y1}V{y2}" fill="none" stroke="{edge}" stroke-width="1.25" marker-end="url(#ah)"/>'
    def t(x, y, txt, size=13, weight=400, fill=ink, anchor="start"):
        return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{txt}</text>'
    s.append('<rect x="16" y="48" width="728" height="328" rx="8" fill="none" stroke="var(--rule)" stroke-width="1.25"/>')
    s.append(t(32, 74, D["top"], 13, 700, quiet))
    for i, c in enumerate(cols):
        s.append(t(c, 102, D["names"][i], 14, 750))
        s.append(box(c, 112, 48, True)); s.append(t(c + 80, 140, D["model"], 13, 500, ink, "middle"))
        if D["mids"][i]:
            s.append(arr(c + 32, 160, 206))
            for k, line in enumerate(D["outs"][i]):
                s.append(t(c + 44, 188 if len(D["outs"][i]) == 1 else 182 + 15 * k, line, 11.5, 400, quiet))
            s.append(box(c, 208, 56)); s.append(t(c + 80, 232, D["mids"][i][0], 13, 600, ink, "middle"))
            s.append(t(c + 80, 250, D["mids"][i][1], 11.5, 400, quiet, "middle"))
            s.append(arr(c + 32, 264, 310)); s.append(t(c + 44, 292, D["motor"], 11.5, 400, quiet))
        else:
            s.append(arr(c + 32, 160, 310))
            s.append(t(c + 44, 232, D["chunks"][0], 11.5, 400, quiet)); s.append(t(c + 44, 248, D["chunks"][1], 11.5, 400, quiet))
        s.append(box(c, 312, 48)); s.append(t(c + 80, 340, D["robot"], 13, 500, ink, "middle"))
    s.append('<rect x="16" y="392" width="728" height="96" rx="8" fill="#f7f0db" stroke="#c79f43" stroke-width="1.25"/>')
    s.append(t(32, 418, D["beyond"], 13, 700))
    s.append(t(32, 446, D["self_"]))
    s.append(t(32, 470, D["data"]))
    fonts = "Archivo, 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', Helvetica, Arial, sans-serif"
    svg = (f'<svg viewBox="0 0 760 504" aria-hidden="true" font-family="{fonts}">'
           f'<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="{edge}"/></marker></defs>'
           + "".join(s) + "</svg>")
    return (f'<figure class="diagram"><div class="scroll" tabindex="0" role="group" aria-label="{D["label"]}">{svg}</div>'
            f'<figcaption>{D["caption"]} <span class="swipe">{STR[lang]["swipe"]}</span></figcaption></figure>')

# ---------- essays ----------
def label_cells(m):
    """Give each body cell a data-label with its column heading (used by the stacked table layout on phones)."""
    head, body = m.group(0).split("</thead>", 1)
    names = [html_lib.escape(html_lib.unescape(re.sub(r"<[^>]+>", "", h)).strip(), quote=True) for h in re.findall(r"<th[^>]*>(.*?)</th>", head, flags=re.S)]
    def row(r):
        it = iter(names)
        return re.sub(r"<td([^>]*)>", lambda c: f'<td{c.group(1)} data-label="{next(it, "")}">', r.group(0))
    return head + "</thead>" + re.sub(r"<tr>.*?</tr>", row, body, flags=re.S)

def source(slug, lang):
    return ROOT / "content" / (f"{slug}.md" if lang == "en" else f"{slug}.{lang}.md")

def build_article(a, lang, langs):
    slug, meta, S = a["slug"], a[lang], STR[lang]
    md_text = source(slug, lang).read_text(encoding="utf-8")
    minutes = meta["minutes"] = read_minutes(md_text, lang)
    md = markdown.Markdown(extensions=["tables", "toc", "md_in_html", "attr_list"],
                           extension_configs={"toc": {"permalink": False}})
    html = md.convert(md_text.replace("{{DIAGRAM}}", "@@DIAGRAM@@"))
    html = html.replace("<p>@@DIAGRAM@@</p>", diagram(lang))
    path = page_path(slug, lang); prefix = up(path)
    html = html.replace('src="/assets/', f'src="{prefix}assets/')
    html = re.sub(r"<table>.*?</table>", label_cells, html, flags=re.S)
    html = html.replace("<table>", '<div class="table-wrap"><table>').replace("</table>", "</table></div>")
    html = re.sub(r"<p><strong>([^<]*[^<.。])</strong></p>", r'<p class="label">\1</p>', html)      # a bold line on its own (not a sentence) is a small heading
    html = re.sub(r'<h2 id="(\d-[^"]*)">', r'<h2 class="approach" id="\1">', html)
    html = re.sub(r'<a href="(https?://[^"]+)"', r'<a href="\1" rel="noopener"', html)
    title, dek = meta["title"], meta["dek"]
    others = [l for l in langs if l != lang]
    alternates = {l: page_path(slug, l) for l in langs} if others else None
    page = f"""{head(f'{title} | {AUTHOR}', dek, prefix, lang, 'article', path, alternates, RAIL_HEAD)}
<body class="has-rail">
<a class="skip" href="#main">{S['skip']}</a>
{rail(prefix, lang, slug, title, md.toc_tokens, langs, meta.get('title_lang'))}
<div class="on-field">
{bar(prefix, lang, other=(others[0], slug) if others else None)}
<div class="masthead"><div class="inner">
<h1 id="top" tabindex="-1"{f' lang="{meta["title_lang"]}"' if meta.get('title_lang') else ''}>{title}</h1>
<p class="dek">{dek}</p>
<p class="meta"><span>{AUTHOR}</span><span><time datetime="{a['date']}">{human_date(a['date'], lang)}</time></span><span>{S['read'].format(n=minutes)}</span></p>
</div></div>
</div>
<main id="main" class="prose" tabindex="-1">
{html}
</main>
{footer(lang)}
{RAIL_SCRIPT}
</body>
</html>
"""
    out = SITE / path / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(page, encoding="utf-8")

# ---------- home ----------
def build_home(articles):
    def entry(a):
        en = a.get("en", {})
        zh = (f'\n<p class="entry-alt"><a href="{page_path(a["slug"], "zh")}" lang="zh-Hans" hreflang="zh-Hans">中文版：{a["zh"]["title"]}</a></p>'
              if "zh" in a["langs"] else "")
        topic = f'<span>{TOPICS[a["topic"]]["en"]}</span>' if a.get("topic") in TOPICS else ""
        first = a["langs"][0]                                   # an essay written in one language only links to that version
        title = (f'<a href="{page_path(a["slug"], "en")}">{en["title"]}</a>' if "en" in a["langs"]
                 else f'<a href="{page_path(a["slug"], first)}" lang="{LANGS[first]["tag"]}">{a[first]["title"]}</a>')
        if "en" in a["langs"]:
            blurb = f'<p>{en["dek"]} {STR["en"]["read"].format(n=en["minutes"])}.</p>{zh}'
        else:
            blurb = f'<p lang="{LANGS[first]["tag"]}">{a[first]["dek"]} {STR[first]["read"].format(n=a[first]["minutes"])}。</p>'
        return f"""<article class="entry">
<p class="entry-meta"><time datetime="{a['date']}">{human_date(a['date'], 'en')}</time>{topic}</p>
<h3>{title}</h3>
{blurb}
</article>"""
    articles = sorted((a for a in articles if a["langs"]), key=lambda a: a["date"], reverse=True)       # newest first
    entries = "\n".join(entry(a) for a in articles)
    links = profile_links()
    links = f"\n{links}" if links else ""
    latest = articles[0]
    world_head = """<link rel="modulepreload" href="./assets/js/world.js">
<link rel="preload" as="image" type="image/webp" href="./assets/img/world-marble.webp">
<script>
(() => {
  const q = new URLSearchParams(location.search), asked = q.get("time"), hour = new Date().getHours();
  let saved;
  try { saved = localStorage.getItem("world-mood"); } catch (e) {}
  const valid = (value) => value === "day" || value === "night";
  const mood = valid(asked) ? asked : (valid(saved) ? saved : (hour >= 6 && hour < 18 ? "day" : "night"));
  const intro = !q.has("still") && !matchMedia("(prefers-reduced-motion: reduce)").matches && (!q.has("manual") || q.has("intro"));
  document.documentElement.dataset.worldMood = mood;
  document.documentElement.dataset.worldPose = intro ? "intro" : "rest";
  const poster = document.createElement("link");
  poster.rel = "preload"; poster.as = "image"; poster.fetchPriority = "high";
  poster.href = "./assets/img/world-" + mood + (matchMedia("(max-width: 40rem)").matches ? "-mobile" : "") + (intro ? "-intro" : "") + ".webp";
  document.head.appendChild(poster);
})();
</script>"""
    page = f"""{head(AUTHOR, f'Essays by {AUTHOR} on robotics and physical AI, where technology is heading, and the world at large.', '', early=world_head)}
<body class="home-page">
<a class="skip" href="#main">Skip to the writing</a>
<section class="world" id="top" aria-label="{AUTHOR}">
<canvas id="world" aria-hidden="true"></canvas>
<div class="world-scrim" aria-hidden="true"></div>
<header class="world-bar">
<span class="home">{AUTHOR}</span>
<nav aria-label="Main navigation"><a href="#writing">Writing</a><a href="#about">About</a><button class="world-mood" type="button" aria-label="Switch to night mode" title="Switch to night mode" hidden>
<svg class="mood-sun" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3.75"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
<svg class="mood-moon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 13.1A8.6 8.6 0 0 1 10.9 3.5a8.6 8.6 0 1 0 9.6 9.6Z"/></svg>
</button></nav>
</header>
<p class="world-loading" role="status" hidden>Loading the world</p>
<div class="world-copy">
<p class="eyebrow">Writing &amp; thinking</p>
<h1>{AUTHOR}</h1>
<p class="lede">{LEDE}</p>
<p class="actions"><a class="cta" href="{page_path(latest['slug'], 'en' if 'en' in latest['langs'] else latest['langs'][0])}">Read the latest essay</a></p>
</div>
<a class="world-scroll" href="#writing"><span>Scroll down for all writing</span><svg class="scroll-arrow" viewBox="0 0 20 28" fill="none" aria-hidden="true"><path d="M10 2v22m-6-6 6 6 6-6"/></svg></a>
</section>
<script>
(async () => {{
const root = document.querySelector(".world"), html = document.documentElement, toggle = root.querySelector(".world-mood");
const canvas = document.getElementById("world");
const q = new URLSearchParams(location.search), still = q.has("still"), stillTime = Number.parseFloat(q.get("still"));
const reduced = still || matchMedia("(prefers-reduced-motion: reduce)").matches;
root.classList.toggle("is-static", reduced);
let seen = false;
try {{ seen = sessionStorage.getItem("world-seen") === "1"; sessionStorage.setItem("world-seen", "1"); }} catch (e) {{}}
// The head selects the mood before the first paint, including the loading preview.
let mood = html.dataset.worldMood || "day";
const loading = root.querySelector(".world-loading");
// On a portrait screen the scene keeps its subject between the navigation and the text below it.
const bar = root.querySelector(".world-bar"), copy = root.querySelector(".world-copy");
const band = () => {{
  const r = root.getBoundingClientRect(), b = bar.getBoundingClientRect(), h = r.height || 1;
  return [((b.top + b.bottom) / 2 - r.top) / h, (copy.getBoundingClientRect().top - r.top) / h];
}};
const set = (s) => {{ root.classList.remove("is-loading", "is-intro", "is-ready"); root.classList.add("is-" + s); loading.hidden = s !== "loading"; }};
const showMood = () => {{
  html.dataset.worldMood = root.dataset.mood = mood;
  const label = "Switch to " + (mood === "day" ? "night" : "day") + " mode";
  toggle.setAttribute("aria-label", label); toggle.title = label;
}};
const busy = (value) => {{ toggle.disabled = value; toggle.setAttribute("aria-busy", String(value)); }};
let world = null, skipped = false, generation = 0, timer, modulePromise;
const skip = () => {{ skipped = true; if (world) world.skip(); set("ready"); }};
addEventListener("keydown", (e) => {{ if (e.key === "Escape") skip(); }});
const start = async () => {{
  const run = ++generation, target = canvas;
  const current = () => run === generation && target === canvas;
  const finish = () => {{ clearTimeout(timer); busy(false); }};
  const fail = () => {{ if (!current()) return; html.classList.add("no-webgl"); set("ready"); finish(); }};
  set("loading"); busy(true); clearTimeout(timer);
  target.addEventListener("world:state", (e) => {{ if (current()) set(e.detail); }});
  target.addEventListener("world:fail", fail);
  target.addEventListener("world:loaded", () => {{
    if (!current()) return;
    html.classList.remove("no-webgl"); root.classList.add("has-frame"); finish();
    if (skipped) world?.skip();
  }});
  timer = setTimeout(() => {{ if (current() && !root.classList.contains("has-frame")) {{ skip(); fail(); }} }}, 15000);
  try {{
    const {{ startWorld }} = await (modulePromise ||= import("./assets/js/world.js"));
    if (!current()) return;
    world = startWorld(target, {{
      reducedMotion: reduced, startTime: still && Number.isFinite(stillTime) && stillTime >= 0 ? stillTime : (reduced ? 9 : 0),
      intro: skipped ? 0 : (seen ? 3.2 : 7.5), quality: q.get("q") || undefined,
      manual: q.has("manual"), manualIntro: q.has("intro"), time: mood, band,
    }});
    if (!world) fail(); else if (skipped) world.skip();
  }} catch (err) {{ console.warn(err); fail(); }}
}};
toggle.addEventListener("click", () => {{
  if (toggle.disabled) return;
  mood = mood === "day" ? "night" : "day";
  showMood();
  try {{ localStorage.setItem("world-mood", mood); }} catch (e) {{}}
  try {{ const url = new URL(location.href); url.searchParams.set("time", mood); history.replaceState(history.state, "", url); }} catch (e) {{}}
  world?.setMood(mood);
  if (!world) html.dataset.worldPose = "rest";
}});
showMood(); toggle.hidden = false; start();
if (document.fonts) document.fonts.ready.then(() => world?.reframe());
}})();
</script>
<main id="main" tabindex="-1">
<section class="section" id="writing">
<h2>Writing</h2>
{entries}
</section>
<section class="section about" id="about">
<h2>About</h2>
<p>{ABOUT}</p>{links}
</section>
</main>
{footer()}
</body>
</html>
"""
    (SITE / "index.html").write_text(page, encoding="utf-8")

# ---------- extras ----------
FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1c1b20"/><text x="32" y="45" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="34" fill="#f6f4ef" text-anchor="middle">AX</text><circle cx="52" cy="14" r="6" fill="#e2bd5a"/></svg>'

# Self-contained, because a missing page can be requested at any depth and the site may live under /<repository>/.
NOT_FOUND = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found | {AUTHOR}</title>
<meta name="robots" content="noindex">
<style>
html {{ height: 100%; }}
body {{ margin: 0; min-height: 100%; display: grid; place-content: center; gap: 1.25rem; padding: 2rem; background: #f6f4ef; color: #1c1b20; font-family: "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif; }}
h1 {{ margin: 0; font-size: clamp(5rem, 22vw, 14rem); line-height: 0.85; font-weight: 900; letter-spacing: -0.03em; }}
p {{ margin: 0; max-width: 28rem; font-size: 1.2rem; line-height: 1.5; }}
a {{ color: #8a651a; }}
</style>
</head>
<body>
<h1>404</h1>
<p>This page doesn't exist. Go back to the <a id="home" href="/">home page</a>.</p>
<script>
// A GitHub Pages project site lives under /<repository>/, so check for that before pointing at "/".
(function () {{
  var first = location.pathname.split("/")[1];
  if (!first) return;
  fetch("/" + first + "/favicon.svg", {{ method: "HEAD" }}).then(function (r) {{ if (r.ok) document.getElementById("home").href = "/" + first + "/"; }}).catch(function () {{}});
}})();
</script>
</body>
</html>
"""

def main():
    for a in ARTICLES:
        a["langs"] = [l for l in LANGS if l in a and source(a["slug"], l).exists()]
        for lang in a["langs"]:
            build_article(a, lang, a["langs"])
    build_home(ARTICLES)
    (SITE / "favicon.svg").write_text(FAVICON)
    (SITE / "404.html").write_text(NOT_FOUND, encoding="utf-8")
    (SITE / ".nojekyll").write_text("")          # tells GitHub Pages to serve the files as they are
    for a in ARTICLES:
        print(a["slug"] + ":", ", ".join(f"{l} {a[l]['minutes']} min" for l in a["langs"]))

if __name__ == "__main__":
    main()
