# Chinese article translations

- Treat the English article as the source of truth. Edit the corresponding `.zh.md`; do not change the English original as part of a translation edit.
- Write clear, natural Chinese for a native Chinese reader. Use a professional personal-essay voice, ordinary wording, and varied sentence lengths. Rewrite around the meaning instead of copying English word order or sentence structure. Avoid 翻译腔、空话、口号和刻意的网络口吻。
- Keep technical terms such as `skill`, `harness`, `runtime`, `agent`, `agentic`, `policy`, `VLA`, `WAM`, and `RL` in English, with consistent spelling. A short Chinese explanation at first use is welcome when it helps comprehension. Keep ordinary surrounding prose in natural Chinese; do not turn every common concept into English.
- Use `runtime` for the technical term, including when the English source spells it `run time` or `run-time`. Do not replace it with `运行时`, `运行期`, or a paraphrase that removes the term from headings or categories. Ordinary descriptions such as “while running” may remain natural Chinese when they are not using the technical term.
- Preserve the exact English names of people, organizations, models, projects, and articles or papers, including full reference titles. Do not substitute translated names or titles.
- Preserve the original claims, dates, quantities, units, comparisons, uncertainty, and limits. Distinguish scores from success rates, observed results from predictions, and attributed claims from established facts.
- Preserve link targets, image paths and structural HTML attributes, code, and shared heading IDs. Translate captions and alt text naturally while keeping English names and terms.
- Check Chinese titles, summaries, diagrams, and other article text in `source/build.py` for consistency as well as the Markdown. Rebuild the pages with `python3 source/build.py`, then verify links, shared anchors, and any layout affected by longer text.
- Before finishing, compare the complete Chinese article with its English original and read the Chinese on its own for clarity and flow.
