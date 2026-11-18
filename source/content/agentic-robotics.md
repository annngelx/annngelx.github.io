There are four main approaches to making a robot agentic today. No survey gives this exact count, because each sorts the field by a different question. Counting the alternative ways a robot's decisions reach its motors at run time gives four.

What separates them is what the frontier reasoning model outputs. Hybrids that switch between approaches step by step are combinations, not a fifth approach.

1. **Layered orchestration.** The model picks and steers learned skills (VLAs, world action models, RL policies) as tools.
2. **Code as policy.** The model writes a program over perception and control primitives.
3. **Constraint- and objective-mediated generation.** The model writes value maps, keypoint constraints or costs; an optimizer turns them into motion.
4. **Direct control.** The model emits the motion targets itself.

End-to-end VLAs and world action models are not counted as approaches, even ones that reason internally. The surveys disagree on them. Salimpour et al. count end-to-end models as one integration type. Wang et al. include a standalone policy only when a foundation-model planner or verifier steers it. Qin et al. state that action prediction alone does not make a system agentic. Here they appear as the motor layer that the run-time paths drive.

{{DIAGRAM}}

## How the 2026 surveys count

Each survey answers a different question, which is why their counts differ.

| Survey | Date | What it sorts by | Its count |
| --- | --- | --- | --- |
| [Envisioning Agentic Robotics](https://arxiv.org/abs/2611.18359) (Grid Robotics: Lan et al.) | Nov 2026 | How the reasoning layer reaches the body | 3 execution paths: layered orchestration, direct control, code as policy; hybrids recommended |
| [A Survey of Agentic Robotics: Toward Continual Self-Improvement](https://www.preprints.org/manuscript/202610.2747) (Wang, Jiang, Shen, Soh) | Oct 2026 | Where the foundation model's decisions act, coded across 2,343 systems | 3 loci: task orchestration, motion/action generation, improvement |
| [Towards Agentic Robots](https://arxiv.org/pdf/2610.20442) (Qin et al.; CUHK, Fudan, Tsinghua and others) | Oct 2026 | Which part of the robot system model decisions shape | 17 categories in 4 domains: model, data, environment, harness |
| [Weights or Skills?](https://www.alphaxiv.org/abs/2608.01851) (Jena et al.) | Aug 2026 | Whether competence ships as network weights or as code | 6 technique branches; code as policy split into 5 levels of self-improvement |
| [Towards Embodied Agentic AI](https://arxiv.org/pdf/2508.05294v4) (Salimpour et al.) | Nov 2025 | How the foundation model is integrated | 4 types: single-shot tool calls, agentic loop, orchestration, direct or embedded |

<figure class="shot">
<img src="/assets/img/envisioning-abstract.webp" alt="arXiv abstract page of Envisioning Agentic Robotics by Grid Robotics, submitted 13 November 2026" width="1180" height="360" loading="lazy">
<figcaption><em>Envisioning Agentic Robotics</em> (Grid Robotics: Qingfeng Lan et al., submitted 13 November 2026) opens by crediting GPT-6 Astra with starting the shift to agentic robotics. Screenshot of the <a href="https://arxiv.org/abs/2611.18359">arXiv abstract page</a>, CC BY.</figcaption>
</figure>

<figure>
<img src="/assets/img/envisioning-fig4-execution-paths.webp" alt="Figure 4 of Envisioning Agentic Robotics: layered orchestration, direct control and code as policy as three paths from S2 to the physical world" width="1260" height="514" loading="lazy">
<figcaption>Figure 4 of <em>Envisioning Agentic Robotics</em>, "Three typical execution paths": approaches 1, 4 and 2 in this essay. The authors note one system may use all three within a single task. From the <a href="https://arxiv.org/html/2611.18359">arXiv HTML version</a>, CC BY.</figcaption>
</figure>

The four approaches here combine two sources. Three are the execution paths named in *Envisioning Agentic Robotics*. The fourth comes from Wang et al., who split motion generation three ways: direct action, programs, and objectives that a solver executes. Wang et al.'s improvement locus and Qin et al.'s Data and Environment domains are real and growing. But they describe how robots are built and improved, not how a robot acts, so they are covered under [Beyond run time](#beyond-run-time-agents-that-improve-robots). Harness functions (memory, monitoring and recovery, skill libraries) appear in every approach, so they are not an approach of their own.

## 1. Layered orchestration

This is how the frontier labs ship today. A reasoning model plans, tracks progress and decides when to replan. Fast learned policies do the physical work as bounded subtasks.

**In production stacks**

- [Gemini Robotics 2.5](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) (DeepMind, Nov 10 2026). The Gemini Robotics ER model tracks the workflow; the 2.5 VLA does the reaching, grasping and placing. Kitting automotive parts on Apptronik's Apollo 2 at Mercedes-Benz reached 96% success.
- [GR00T 2](https://research.nvidia.com/labs/gear/gr00t-2) (NVIDIA, Nov 2026). A reasoning model marks grasp and release points on the camera view.
    - On the YAM arm, instruction following rose from 40% to 92%.
    - Long-horizon trash sorting went from 0 to 17 of 20 runs.
    - Three toy assemblies scored 98, 97 and 97 out of 100.
- [π0.7](https://arxiv.org/abs/2604.15483) (Physical Intelligence, Apr 2026). The motor model itself is built to be steered from above: it accepts language coaching, strategy metadata and subgoal images generated at run time by a small world model.

<figure>
<img src="/assets/img/gr00t2-agentic-hanoi.webp" alt="Two robot arms above a Tower of Hanoi puzzle in NVIDIA's agentic GR00T 2 demo" width="1456" height="819" loading="lazy">
<figcaption>A still from NVIDIA's agentic GR00T 2 demos: a frontier reasoning agent plans the Tower of Hanoi moves and calls GR00T 2 as a tool for each grasp. In NVIDIA's words, the agent decides what to do and GR00T 2 decides how. From the <a href="https://research.nvidia.com/labs/gear/gr00t-2">GR00T 2 project page</a>, which has the videos.</figcaption>
</figure>

**In research harnesses**

- [VLAs-as-Tools](https://arxiv.org/abs/2605.13119): a VLM agent calls specialized VLA tools for bounded subtasks and replans when they report progress events. On three real Franka tasks, success rose from 16.7% to 58.3% under matched data and compute.
- [RoboHarness](https://arxiv.org/abs/2607.18060): wraps VLAs, RL policies and task-and-motion planners as skills. It learns where each policy works from execution memory, and steers the robot into the next policy's familiar states before handing over.
- [VoLo](https://arxiv.org/abs/2606.07723) (NVIDIA): the VLM can interrupt and redirect a VLA or world action model mid-run, because the physical world keeps moving while the model reasons.
- [EMERGE-Policy](https://arxiv.org/abs/2608.29896): splits the agent into sub-agents for perception, monitoring, verification and memory, with branch-based recovery.

**What decides whether it works.** A [systematic study of hierarchical VLA agents](https://arxiv.org/abs/2606.10267) (Hu, Shridhar, Shah, Tan, Xie) found that model choice and interface design jointly shape performance. A carefully designed hierarchy beat both a flat VLA and a naive hierarchy. Three design questions recur:

1. **The interface.** What the reasoner hands down is moving from text subgoals to pictures: subgoal images, grasp marks, traces.
2. **Switching.** When control passes between layers: on a timer, on an event, or by interruption.
3. **Handoffs.** Each motor policy only works in states its training data covered. Chaining policies fails at the seams unless the harness manages the transition.

**Strengths and limits.** Dexterity comes from specialized motor models; semantics and recovery come from the reasoner. But the system can only do what its motor tools can do, and nobody knows those tools' capability boundaries in advance.

## 2. Code as policy

Here the frontier model acts like a robotics engineer. It writes perception, planning and control code against the robot's interfaces, runs it, watches what happens and fixes it. The approach goes back to Google's Code as Policies (2022). What is new in 2026 is that coding agents can now get a robot working without a human writing the code.

**Key evidence**

- [CaP-X](https://arxiv.org/abs/2603.22435) (Fu, Goldberg, Jim Fan and others, 2026) benchmarks 12 frontier models on robot manipulation through generated code.
    - Performance depends heavily on the abstractions a human designer provides, and drops as they are removed.
    - Test-time compute closes much of the gap even with low-level primitives: multi-turn interaction, execution feedback, visual differencing, automatic skill synthesis.
    - RL with verifiable rewards (CaP-RL) improves success and transfers from simulation to real robots with little loss.
- [Vals Robo-bench](https://www.vals.ai/benchmarks/robo_bench) (Oct 2026) runs each model in its vendor's coding agent (Codex, Claude Code). The agent gets only a robot's datasheet, kinematic model and sensor specs, and writes everything else itself.
    - Platforms: a Franka arm with 13 tasks, and a Unitree G1 humanoid with 11 tasks and no walking or balance controller.
    - Top scores: GPT-6.1 Sol 28.3%, GPT-6 Astra 23.3%, Claude Opus 5.5 14.6%.
    - No model reached 2 points on the humanoid tasks.
    - Common failures: declaring a task done before it was, and thinking too long while the simulated physics kept running.
- [Project Fetch, Phase Two](https://ai-beat.github.io/news/2026/06/project-fetch-phase-two/) (Anthropic, Jun 2026). Claude Opus 4.7 worked a robot dog on its own: connecting to the lidar and cameras, writing control programs, detecting objects and navigating.
    - It finished four tasks in 9 minutes 35 seconds. The fastest human team, aided by an older Claude, took 181 minutes.
    - It wrote 1,045 lines of code against that team's 10,309.
    - It still could not fetch the ball: closed-loop control during the approach and grasp failed.

<figure>
<img src="/assets/img/vals-robobench-tasks.webp" alt="Three public Vals Robo-bench tasks: arm balance scale, arm Lego manual, humanoid ninja course" width="1411" height="383" loading="lazy">
<figcaption>The three public Vals Robo-bench tasks. A coding agent gets only the robot's datasheet and must write all the perception and control code itself. No model reached 2 points on humanoid tasks like the ninja course. From <a href="https://www.vals.ai/benchmarks/robo_bench">Vals AI</a>.</figcaption>
</figure>

**Strengths and limits.** Code needs no robot training data, can be read and debugged, and builds a reusable skill library. It is strongest at integration: drivers, sensors, perception, planning. It is weakest where control must react to contact every fraction of a second. That is exactly the gap learned motor models fill.

## 3. Constraint- and objective-mediated generation

Here the model specifies what a good motion must satisfy, and an optimizer works out the motion. The model writes 3D value maps, keypoint constraints or cost functions; a solver turns them into trajectories and re-solves as the scene changes. Wang et al. treat it as one of three ways a foundation model shapes motion, beside direct action and programs.

**Key work**

- [ReKep](https://arxiv.org/abs/2409.01652) (Huang, Wang, Li, Zhang, Fei-Fei; 2024). The task becomes a sequence of relational keypoint constraints: Python functions that score 3D keypoint configurations. Vision-language models synthesize the constraints automatically, and a hierarchical optimizer solves them repeatedly as a closed-loop policy running in real time.
- VoxPoser and MOKA are earlier examples that Wang et al. place in the same class.
- [EmboAlign](https://arxiv.org/abs/2603.05757) (Northwestern and Stanford, Mar 2026). It pairs this approach with a video generation model. A VLM writes constraints encoding spatial, kinematic and safety requirements; these are used to select among generated video rollouts, then to refine the robot trajectory and correct retargeting errors. It was tested on six real-robot tasks.

<figure>
<img src="/assets/img/rekep-method.webp" alt="ReKep pipeline: a vision model proposes keypoints, a VLM writes constraint functions, and a constrained optimization solver produces the actions for pouring tea" width="1411" height="631" loading="lazy">
<figcaption>The ReKep pipeline for "Pour tea into the cup": a VLM writes keypoint constraints as Python functions, and a constrained optimization solver turns them into gripper motion. From the <a href="https://rekep-robot.github.io/">ReKep project page</a>.</figcaption>
</figure>

**Strengths and limits.** The optimizer delivers geometric precision and constraint satisfaction that language and code alone struggle with, and the spec is easy to inspect. The weak point is the spec itself. The Goal-VLA authors note that VLM-generated value maps, constraints and rewards are often inaccurate, because current VLMs are weak at precise spatial reasoning.

## 4. Frontier models in direct control

Here the general-purpose reasoning model is the policy. It looks at the cameras, emits a short chunk of motion through a tool call, looks again and repeats. There is no learned motor model and no program in between. This is the newest approach and the most contested; it only became plausible with the spatial reasoning of the late-2026 frontier models.

**How it is run.** The open-source [Inspect Robots](https://pypi.org/project/inspect-robots/) framework puts a frontier model in the slot where a VLA would sit. The model drives the robot through tool calls, one approver-checked motion chunk per call. Every run is clamped to the robot's limits by default, with a cap on how far each step can move.

**Results so far**

- **Robocurve on real YAM arms** ([Sept 2026](https://zeli.app/story/49582582)), 20 trials each:
    - Block into bowl: GPT-6 Astra 19, Claude Fable 5.1 8, Claude Fable 5 just 1.
    - Astra averaged 2.5 minutes and $0.94 per run, against 6.8 minutes and $2.12 for Fable 5.1.
    - Dexterous insertion: Astra and Fable 5.1 both succeeded only twice, stalling at the same final step.
- **Robocurve, six tabletop tasks** ([Sept 23](https://runtimewire.com/article/robocurve-opus-55-robotics-benchmark)): Claude Opus 5.5 matched Astra on average progress, about 36%, at roughly $0.90 per run. Astra fully completed five tasks; Opus 5.5 completed one.
- **RoboDojo Sim** ([Anthropic-run, Nov 9](https://www.humanoidsdaily.com/news/anthropic-claude-fable-5-2-robotics-robodojo)): a simulated two-arm benchmark with 42 tasks, built to rank VLAs.
    - Scores: Claude Fable 5.2 64.9%, Opus 5.5 39.4%, Gemini 4 Argon 34.2%, GPT-6 Astra 29.8%, Fable 5.1 27.6%.
    - Caveats: Anthropic ran every model itself and has not said whether the figure is a score or a success rate. Its post also doesn't say whether Fable 5.2 drove the arms directly or worked through code or skill models.

<figure class="post">
<img src="/assets/img/robocurve-astra-fable-post.webp" alt="Post by Jay Chooi: GPT-6 Astra scored 95% on a robot control task, up from Fable 5.1's 40%, with a chart of completion rate against API cost" width="845" height="650" loading="lazy">
<figcaption>Robocurve's founder Jay Chooi on the block-in-bowl result: GPT-6 Astra 95% against Claude Fable 5.1's 40%, at 2.3 times lower cost. <a href="https://x.com/chooi_jeq/status/2096064315115839904">Post on X</a>, 5 September 2026.</figcaption>
</figure>

**The case for it.** In a [YC interview](https://dealroom.co/news/talk-Jv5B5CEaPJI-why-general-purpose-llms-may-win-at-robotics-waddle-labs-and-robocurve/), Waddle Labs and Robocurve make the bitter-lesson argument: models trained on code, computer use and first-person video will beat models trained only on scarce robot data. They claim that frontier output speed is roughly doubling every month and could allow real-time control by the end of 2026. In the same interview, Waddle Labs said it compresses what the big model learns in context into reusable skills that smaller, faster models can run.

**The case against it.**

- **Latency.** Physics keeps moving while the model thinks.
- **Cost.** About $1 to $2 per simple pick.
- **Precision.** Contact-rich steps such as insertion still fail.
- **Safety.** In Robocurve's [RoboHarm](https://www.neoteo.com/en/robocurves-roboharm-measured-three-robot-policies-in-staged-trials) test, models rarely refused harmful commands. Across five hazardous instructions, Astra attempted 97 of 100 trials. Fable 5.1 refused 20 times, all in the task that asked it to stab a baby doll.

<figure class="post">
<img src="/assets/img/robocurve-roboharm-post.webp" alt="Post by Jay Chooi on the RoboHarm benchmark: chart of harmful attempts against harmful successes for GPT-6 Astra, Fable 5.1 and MolmoAct2, with frames from the trials" width="845" height="714" loading="lazy">
<figcaption>The RoboHarm results as Robocurve posted them: Astra attempted harmful actions in 97% of trials and succeeded in 62% of those attempts. Fable 5.1 refused the doll task outright. <a href="https://x.com/chooi_jeq/status/2101118049944543545">Post on X</a>, September 2026.</figcaption>
</figure>

## Hybrids: choosing the path step by step

The four paths are not exclusive, and the strongest systems mix them. [*Envisioning Agentic Robotics*](https://arxiv.org/html/2611.18359) argues that the interfaces don't form a scale from easy to hard. Each brings its own priors, control burden and failure modes. Its authors recommend testing three set-ups side by side: skills only, direct end-effector control, and a hybrid where the model chooses per step.

The result they cite shows why: in one benchmark, GPT-6 Astra scored 92% with native control, fell to 61% when restricted to skills, and recovered to 85% when it could decide per skill whether to use one. Forcing a strong reasoner through a narrow interface cost more than it gained.

## Beyond run time: agents that improve robots

Two activities change what a robot runs on, not how it acts in the moment, and either can sit on top of any of the four approaches. ASPIRE is self-improvement on top of code as policy, and Learning While Deploying is self-improvement on top of a VLA stack. The line between the two activities is blurry: ENPIRE generates its own rollouts while improving policies, and RoboGen builds worlds and learns skills in the same loop.

### Self-improvement

Here the model's decisions outlast the episode: it makes lasting changes to the robot's policies, rewards, code or skills. [Wang et al.](https://www.preprints.org/manuscript/202610.2747) split this into two kinds, and the second is where 2026's activity is.

- **Fixed-procedure improvement.** The model supplies candidates inside a pipeline humans designed. Examples include Eureka (LLM-written reward functions), DrEureka, RoboCat and RoboGen. Fleet RL on VLAs belongs here too: [Learning While Deploying](https://arxiv.org/abs/2605.00416) (AgiBot) runs offline-to-online RL on autonomous rollouts and human interventions from a robot fleet.
- **Agent-directed improvement.** The model also chooses the evidence, runs tests, changes the procedure or picks what to change. Of the 2,343 systems Wang et al. coded, only 17 do this, and 16 of them appeared in 2026.
    - [ENPIRE](https://ut-austin-rpl.github.io/publications/2026/06/18/xiao-arxiv26-enpire/) (NVIDIA, CMU, Berkeley and others; Jun 2026). A harness lets coding agents run the physical loop themselves: reset the scene, run a policy, verify the outcome, refine. The agents read logs, consult the literature and rewrite training code. They trained policies to 99% success on dexterous tasks such as organizing a pin box and fastening a zip tie, faster when an agent team worked across a robot fleet.
    - [ASPIRE](https://arxiv.org/abs/2607.00272) (NVIDIA and others; Jun 2026). It writes and repairs code-as-policy programs from multimodal execution traces, stores validated fixes in a growing skill library, and searches over new tasks and programs. On unseen long-horizon LIBERO-Pro tasks it reached 31% success against 4% for prior methods.

<figure class="post">
<img src="/assets/img/jimfan-enpire-post.webp" alt="Post by Jim Fan introducing ENPIRE: 8 Codex agents given a fleet of robots, GPUs and a token budget, with a video still of a robot hand at a pin box" width="845" height="749" loading="lazy">
<figcaption>NVIDIA's Jim Fan introducing ENPIRE as "AutoResearch in the physical world": eight Codex agents with a robot fleet, GPUs and a token budget. <a href="https://x.com/DrJimFan/status/2066921736369766762">Post on X</a>, June 2026.</figcaption>
</figure>

This approach is still rare. Persistent improvement shows up in about one system in five each year, with no clear upward trend. What changed in 2026 is that frontier coding agents started directing the loop instead of feeding candidates into it.

### Data and world generation

Here the model doesn't control the robot or change its code. It decides what the robot learns from and is tested on. [Qin et al.](https://arxiv.org/pdf/2610.20442) give this two of their four domains. Data covers collection, annotation and refinement. Environment covers rebuilding scenes, generating tasks and building benchmarks.

- [AutoRT](https://arxiv.org/abs/2401.12963) (Google DeepMind, 2024). A VLM describes each scene, an LLM proposes tasks, and a written "robot constitution" filters them for safety. It directed over 20 robots across several buildings and collected 77,000 real episodes.
- [RoboGen](https://arxiv.org/abs/2311.01455) (2023–24). Runs a propose-generate-learn cycle: the agent proposes skills, builds simulation scenes for them, picks a learning method and generates the training supervision.
- [V-CAGE](https://www.alphaxiv.org/abs/2604.09036) (2026). Synthesizes simulation data agentically, in place of scripted pipelines that break when tasks fail.
- [Gemini Robotics 2.5](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) (Nov 2026). Gemini 4 Argon turned real camera scenes into digital twins and thousands of varied practice runs. It also analyzed failure videos, proposed causes, and tested fixes in simulation and on robots.

The catch is the gap to reality. *Envisioning Agentic Robotics* notes that synthetic data still carries a sim-to-real gap, so generated worlds supplement real deployment data rather than replace it.

## Side by side

Dexterity trades against generality: the less a system relies on learned motor models, the less robot data it needs, and the worse it handles contact.

| Approach | What the model outputs | Robot data needed | Strongest at | Weakest at | Examples |
| --- | --- | --- | --- | --- | --- |
| 1. Layered orchestration | Subgoals, subgoal images, grasp marks | Yes, for every motor model | Dexterous skills inside long tasks | Handoffs between policies; tasks outside the tools' range | Gemini Robotics 2.5, GR00T 2 with a reasoner, VLAs-as-Tools, RoboHarness |
| 2. Code as policy | A program over perception and control primitives | No | Integration, perception, planning, reusable skills | Fast closed-loop contact | CaP-X, Vals Robo-bench agents, Project Fetch |
| 3. Constraint- and objective-mediated | Value maps, keypoint constraints, costs | No | Geometric precision via an optimizer | Inaccurate specs from weak VLM spatial reasoning | ReKep, VoxPoser, EmboAlign |
| 4. Direct control | Motion chunks, one per tool call | No | Novel tasks with no setup | Latency, cost per action, precision, safety | Robocurve trials, Fable 5.2 on RoboDojo |

## Where the lines blur, and what is still open

The approaches are starting to mix. A coding agent can call a VLA as one of its primitives. Waddle Labs distills what a frontier model learns in context into skills that smaller, faster models run. Anthropic hasn't said whether Fable 5.2's RoboDojo result came from direct control, code or skill models. Meanwhile, motor models are absorbing agent functions themselves: π0.7 takes coaching mid-task, and Physical Intelligence's [MEM](https://arxiv.org/abs/2603.03596) gives a VLA language-based memory for tasks up to about 15 minutes.

Open questions:

1. **Inside or outside?** Will planning, memory and recovery stay in a harness around the motor model, or move into the model?
2. **Speed and cost.** Can frontier models get fast and cheap enough for direct control of contact-rich work, or will they always need a learned layer below?
3. **The interface.** Which language will reasoners and motor layers settle on: text, pictures (subgoal images, marks) or code?
4. **Evaluation.** Most numbers here come from the labs that built the systems. Neutral evaluations (Robocurve, Vals, the RoboDojo leaderboard) are still small, run few trials, and disagree on setup.
5. **Safety at the action layer.** DeepMind's [ASIMOV-Jailbreak](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) benchmark reports 99.5% jailbreak resistance for Gemini 4 Argon, against 82% for Gemini Robotics ER 2. RoboHarm suggests that frontier models in direct control mostly comply with harmful commands.

## Demo videos and project pages

| Approach | Project | Where to watch |
| --- | --- | --- |
| 1. Layered orchestration | Gemini Robotics 2.5 (DeepMind) | [Launch post](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) |
| 1. Layered orchestration | GR00T 2 with a reasoning model (NVIDIA) | [Project page](https://research.nvidia.com/labs/gear/gr00t-2) |
| 1. Layered orchestration | VoLo (NVIDIA) | [Project page](https://chicychen.github.io/VoLo/) |
| 1. Layered orchestration | Hierarchical VLA agents study | [Project page](https://jiahenghu.github.io/hi-vla) |
| 1. Layered orchestration | π0.7 (Physical Intelligence) | [Project page](https://pi.website/pi07) |
| 2. Code as policy | Vals Robo-bench | [Leaderboard and run examples](https://www.vals.ai/benchmarks/robo_bench) |
| 3. Constraints | ReKep | [Project page](https://rekep-robot.github.io/) |
| 4. Direct control | Robocurve trials | [Jay Chooi's posts](https://x.com/chooi_jeq/status/2096064315115839904) |
| Beyond run time | ENPIRE (NVIDIA and others) | [Project page](https://research.nvidia.com/labs/gear/enpire/) |
| Beyond run time | ASPIRE (NVIDIA and others) | [Project page](https://research.nvidia.com/labs/gear/aspire/) |

## Sources

<div class="sources" markdown="1">

**Surveys**

- [Envisioning Agentic Robotics: A New Era of Robotic Systems](https://arxiv.org/abs/2611.18359), Grid Robotics
- [A Survey of Agentic Robotics: Toward Continual Self-Improvement](https://www.preprints.org/manuscript/202610.2747), Wang, Jiang, Shen, Soh
- [Towards Agentic Robots: Model, Data, Environment, and Harness](https://arxiv.org/pdf/2610.20442), Qin et al.
- [Weights or Skills? A Survey of Robot-Learning Techniques](https://www.alphaxiv.org/abs/2608.01851), Jena et al.
- [Towards Embodied Agentic AI](https://arxiv.org/pdf/2508.05294v4), Salimpour et al.

**Systems and results**

- [Gemini Robotics 2.5](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/), Google DeepMind
- [GR00T 2](https://research.nvidia.com/labs/gear/gr00t-2), NVIDIA GEAR
- [π0.7](https://arxiv.org/abs/2604.15483) and [MEM](https://arxiv.org/abs/2603.03596), Physical Intelligence
- [What Matters in Orchestrating Robot Policies](https://arxiv.org/abs/2606.10267)
- [VLAs-as-Tools](https://arxiv.org/abs/2605.13119), [RoboHarness](https://arxiv.org/abs/2607.18060), [VoLo](https://arxiv.org/abs/2606.07723), [EMERGE-Policy](https://arxiv.org/abs/2608.29896)
- [CaP-X](https://arxiv.org/abs/2603.22435), [Vals Robo-bench](https://www.vals.ai/benchmarks/robo_bench), [Project Fetch, Phase Two (summary)](https://ai-beat.github.io/news/2026/06/project-fetch-phase-two/)
- [ReKep](https://arxiv.org/abs/2409.01652), [EmboAlign](https://arxiv.org/abs/2603.05757)
- [Inspect Robots](https://pypi.org/project/inspect-robots/), [Robocurve: Astra vs Fable](https://zeli.app/story/49582582), [Robocurve: Opus 5.5 vs Astra](https://runtimewire.com/article/robocurve-opus-55-robotics-benchmark), [RoboHarm](https://www.neoteo.com/en/robocurves-roboharm-measured-three-robot-policies-in-staged-trials)
- [Claude Fable 5.2 on RoboDojo](https://www.humanoidsdaily.com/news/anthropic-claude-fable-5-2-robotics-robodojo), Humanoids Daily
- [Waddle Labs and Robocurve, YC interview](https://dealroom.co/news/talk-Jv5B5CEaPJI-why-general-purpose-llms-may-win-at-robotics-waddle-labs-and-robocurve/)
- [ENPIRE](https://ut-austin-rpl.github.io/publications/2026/06/18/xiao-arxiv26-enpire/), [ASPIRE](https://arxiv.org/abs/2607.00272), [Learning While Deploying](https://arxiv.org/abs/2605.00416)
- [AutoRT](https://arxiv.org/abs/2401.12963), [RoboGen](https://arxiv.org/abs/2311.01455), [V-CAGE](https://www.alphaxiv.org/abs/2604.09036)

</div>
