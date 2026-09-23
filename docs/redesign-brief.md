# First Draft landing-page redesign brief

Last updated: September 23, 2026

## Goal

Explore how First Draft should introduce itself while its near-term delivery model is still being validated. The work should make four plausible positions concrete enough for Raghu to compare:

1. a facilitated workshop that uses First Draft,
2. an agent Skill and CLI that compile a reviewed plan, and
3. a new AppDev opening experience that can lead into a workshop, and
4. a deliberation-first alternative to instant app generators: plan together, compile a coherent foundation, and keep code the owner can understand.

This is a positioning and design exploration, not a commitment to one permanent offer. The first review is qualitative. Registration mechanics, dates, duration, pricing, and live traffic testing are intentionally deferred.

## Source material

- Current homepage: <https://staging.firstdraft.com/>
- Current workshop page: <https://staging.firstdraft.com/workshop>
- Current internal-alpha workflow: <https://gist.github.com/raghubetina/3d424a97a1eaa6de8c406e67f32a237e>
- Basecoat: <https://basecoatui.com/>
- Basecoat customization: <https://basecoatui.com/customization/>
- Lovable: <https://lovable.dev/>
- Revyl: <https://revyl.com/>
- Remotion: <https://www.remotion.dev/>
- Interaction reference: <https://arv.in/>

The product facts below are based on the September 22–23, 2026 staging pages and Skill guide. Revalidate them before publishing final copy.

## Current product truth

- A user plans an app with a coding agent and reviews a structured Foundation Plan before compilation.
- The Skill and CLI submit the plan to First Draft's backend. Generation and verification happen on that service; the resulting source is downloaded to the user's local folder.
- The generated baseline is an ordinary Rails application, with selected iPhone and Android projects when requested.
- Users bring their own coding-agent account and tokens. First Draft authentication and API access are separate.
- The owner can keep the source locally, place it in their GitHub account, and continue with their chosen agent or a developer.
- The intended ownership story is stronger than “source is available”: the user's local source or repository should be the source of truth. GitHub publication is optional in the current Skill and must not be presented as required or automatic.
- The current alpha workflow has been exercised with a Reading List example across plan authoring, service compilation, local Rails, iPhone and Android builds, and hosted Revyl previews.
- Visual design is a later development step. A sketch or prototype can inform planning, but the Foundation Plan primarily captures structured behavior.
- The public planning/review GUI is future work and must not appear as an available feature.

## Workshop truth

- The workshop is the leading near-term commercial hypothesis, but it has not yet been announced as a fixed public program.
- Day 1 of AppDev will partially exercise the workshop workflow and provide evidence for what should happen next.
- A good workshop outcome is a coherent working foundation plus a demonstrated first change outside the generated surface—not a finished company or disposable mockup.
- Facilitation is part of the delivery experiment. It is not necessarily the long-term product architecture.
- The no-Mac path is a meaningful constraint. Revyl can show an unsigned Simulator build in a browser, but this is not physical-device installation, real push validation, signing, or App Store publication.
- A future white-glove hosting service is possible but not part of the current offer.

## Audience hypotheses

### Future workshop participants

Founders, operators, product people, domain experts, and former students who have a concrete application idea. They understand the work and desired outcome better than the framework vocabulary and want help making decisions.

### Agent-native builders

Technically curious builders already working in Claude Code or another coding-agent environment. They care about the Plan, CLI, generated source, verification, ownership, and the ability to keep building normally.

### AppDev students and alumni

Learners who benefit from starting with a functioning foundation and then understanding how the server, data model, web interface, native shells, external services, and deployment fit together.

## Current-site audit

### What works

- Strong, consistent visual identity built around pale blue fields, dark navy typography, and credible product artifacts.
- Clear ownership story: source, Git history, accounts, and infrastructure remain under the user's control.
- Concrete evidence instead of vague AI claims: plans, compilation records, tests, Rails, and native projects are shown.
- Sound responsive behavior. Playwright found no horizontal overflow at 390px on either page.
- Accessible structure includes a skip link, semantic headings, labeled navigation, and descriptive figure text.

### What is now misaligned

- The homepage leads with the standalone compiler/platform even though the immediate priority is learning whether the facilitated workshop works.
- The workshop appears after roughly eight thousand desktop pixels of product explanation, so the current priority reads as a secondary CTA.
- The homepage measures about 8,120px at 1440px wide and 12,538px at 390px wide. The workshop page measures about 5,157px desktop and 7,609px mobile.
- Several sections repeat the same pale-blue/card grammar. The information is careful, but the rhythm becomes uniform and the page feels longer than its argument.
- The workshop page is candid but often describes what is still undecided. It needs a stronger positive transformation before the caveats.
- “Foundation,” “Compiler,” “Foundation Plan,” and “Skill” appear before a new visitor has a simple mental model for the outcome.
- The current calls to action compete: templates, GitHub sign-in, course, workshop plan, and development progress.

## Positioning conviction

First Draft should not compete on “type one prompt and watch an app appear.” Its advantage is that the user and agent work hand in hand before generation. The agent asks questions, exposes assumptions, names rules and exceptions, and produces a plan the user can review. First Draft then compiles that shared understanding into a conventional application foundation.

The simplest version of the promise is:

> Your idea. Your code. Built in conversation.

Supporting language:

- Plan more than you think. It produces a better result.
- A good agent should challenge the idea, not merely agree with it.
- One reviewed plan keeps people, data, permissions, workflows, integrations, and edge cases coherent.
- Your repository is the source of truth. Continue with the coding agent or developer you choose.
- A static site displays pages. A real application remembers people and data, enforces rules, runs workflows, and changes over time.

This is the strategic distinction from instant app builders and integration-heavy stacks. Avoid claiming that First Draft has no dependencies or external services. Instead, say that it makes system boundaries explicit and brings the application foundation together in code the owner can inspect.

## Reference takeaways

### Lovable

- Useful: immediate category clarity, simple language, soft motion fields, approachable UI demonstrations.
- Avoid: making speed the whole promise; presenting a catalog of connected services as if it were the product outcome; generic “build anything” language.

### Revyl

- Useful: a visual line that carries the visitor through one story; sparse sections; confident technical proof; interface imagery integrated into the composition.
- Adaptation: one line can begin as a browser outline, pass through the repository and Foundation Plan, and resolve into a phone. It should signify continuity, not a dependency graph.

### Remotion

- Useful: plain-language category statement, playful product artifacts, interactive explanations, and a strong “code is the source of truth” principle.
- Adaptation: make planning artifacts tangible and slightly playful without turning the page into a component gallery.

### arv.in

- Useful: scroll-controlled pacing, deliberate negative space, color shifts between chapters, and large editorial statements.
- Adaptation: use sticky/scrub sequences for the agent conversation and foundation outputs. Keep a reduced-motion path that reveals the same information without animation.

### Shader references added to Pencil

- Favor the warm silk and soft ribbed palettes over high-saturation neon.
- Use shader motion as atmosphere, not content. Text and controls need a stable contrast veil.
- Ribbed glass can frame the conversation and plan, but should remain legible and restrained.

## Strategic variables to test

| Variable | Workshop-first | Skill-first | AppDev-first | Deliberation-first |
| --- | --- | --- | --- | --- |
| Primary audience | Future paid attendees | Agent-native builders | Students and alumni | Idea-led builders intimidated by fragmented stacks |
| Hero promise | Bring an idea; leave with a foundation you own | Turn a reviewed plan into tested source | Start with a working foundation, then understand it | Your idea and reasoning become code you own |
| First proof | Facilitated decisions and participant outcome | Plan → compile → run workflow | Day 1 progression and learning outcome | Agent conversation visibly sharpens the plan |
| Role of workshop | The offer | Guided option after the tool | Next step after the course experience | The place to learn and experience the method |
| Role of Skill | Mechanism inside the workshop | The product entry point | Tool used during the learning experience | The agent-side guide for deliberation and compilation |
| CTA | Placeholder | Placeholder | Placeholder | Placeholder |

## Concept requirements

Create four complete 1440px desktop landing pages in `firstdraft-landing.pen`. Each should contain near-final, claim-safe copy and a distinct visual language.

### A. Workshop-first — “The working session”

- Transformation: bring a concrete idea and leave with a foundation that can continue outside First Draft.
- Narrative: promise → fit → facilitated decisions → what leaves the room → ownership → limitations → CTA placeholder.
- Visual character: warm editorial workshop, visible annotations and decisions, parchment surfaces with restrained terracotta and olive accents.
- Avoid staged classroom photography. Use product artifacts, workshop notes, and structured decision marks as the human evidence.

### B. Skill-first — “The compilation bridge”

- Transformation: move from an agent conversation to conventional, tested source without handing the project to a proprietary builder.
- Narrative: promise → workflow → inspectable Plan → compilation record → web/native outputs → ownership → workshop option → CTA placeholder.
- Visual character: technical blueprint/code bridge, dark and light contrast, monospaced evidence, precise status language.
- Make the service boundary clear: the agent authors and orchestrates; First Draft compiles; the owner downloads and continues.

### C. AppDev-first — “Day 1 with momentum”

- Transformation: start with something working, then learn how the pieces fit and how to direct the next change.
- Narrative: promise → Day 1 sequence → what students understand → artifact stack → continuation → workshop bridge → CTA placeholder.
- Visual character: structured educational playbook, generous editorial type, numbered progression, brighter academic accent.
- Do not imply that the generated foundation replaces learning or that all students must join a paid workshop.

### D. Deliberation-first — “Your idea, your code”

- Transformation: move from an idea and a pile of prompts to a coherent application foundation whose reasoning and source the owner understands.
- Narrative: promise → static demo versus real application → challenging agent conversation → reviewed plan → web/repository/native continuity → ownership → workshop.
- Visual character: warm animated silk, ribbed glass, editorial serif copy, and one continuous line that changes from browser to repository to phone.
- Interaction: the conversation should scrub with scroll, adding questions and plan artifacts in sync. The device outline should morph across chapters. Respect `prefers-reduced-motion` and keep all content available without scrubbing.
- Avoid positioning the agent as combative. Questions should feel constructive, specific, and confidence-building.
- Avoid “everything in one monolith” claims. The message is coherent ownership and understandable boundaries, not zero integrations.

## Claims and language guardrails

Do say:

- working foundation
- reviewed Foundation Plan
- tested or verified baseline when referring to the compiler record
- ordinary Rails source that the owner can continue
- iPhone and Android projects or previews when the lane actually includes them
- built with a coding agent and the user's own agent account

Do not promise:

- a finished production company
- a complete custom interface matching a design prototype
- fixed workshop dates, price, duration, cohort size, or registration
- physical iPhone installation, App Store delivery, real push delivery, or hardware proof from a Revyl Simulator preview
- continued Revyl access as part of the generated source
- a currently available First Draft planning GUI
- general standalone access before the offer is actually released

## Basecoat handoff

Basecoat is the implementation substrate, not the visual concept itself. Each direction should map its palette and controls to semantic shadcn-compatible tokens such as `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--input`, and `--ring`. Choose one Basecoat style bundle per implemented direction, then override tokens rather than layering multiple bundles.

The concepts should avoid looking like an unmodified component-library demo. Use Basecoat for behavior, states, accessibility, and maintainable theming while preserving the selected direction's typography, spacing, and editorial composition.

## First-round success criteria

- Raghu can identify the intended audience and promise of each page within five seconds.
- The three concepts feel genuinely different rather than like headline swaps.
- Each page has one obvious, intentionally nonfunctional CTA placeholder.
- The mechanism is understandable without requiring prior knowledge of First Draft terminology.
- Proof is concrete and claims remain within the current alpha evidence.
- The winning direction—or a deliberate hybrid—can be named after review.
- The page is recognizably unlike instant-generator category pages: deliberation and coherent ownership are the memorable ideas, not prompt speed or an integration logo wall.
