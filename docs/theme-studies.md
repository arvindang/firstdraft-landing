# First Draft visual theme studies

Last updated: September 23, 2026

These studies hold the landing-page structure and product story constant while changing typography, palette, surface treatment, and visual personality. They are intended to answer how far First Draft should move from the current staging identity—not to reopen the positioning decision.

Editable source: <https://app.pen.dev/s/EIPmlGTvz2hQ0_THhpWHDNVDJ7ZZOV0wocnvXcSJEys>

## Shared content and interaction structure

All three themes incorporate the section comments added beside Concept D:

1. The product proof progresses from wireframe to working flow to a signed-in application with saved data and access rules.
2. The planning conversation uses the Reading List example and the actual Foundation Plan vocabulary: records, fields, actions, access, sample data, selected clients, warnings, and support gaps.
3. Desktop and iPhone show the same Reading List state with one shared scrub timeline. This stands in for synchronized sample videos during the next prototyping pass.
4. The phone receives a Siri-like multicolor perimeter glow. In production, the light would travel around the border with scroll progress.
5. The workshop is a distinct offer section with Raghu as host, placeholders for duration and date, and a single updates CTA.
6. Workshop deliverables are separate cards: Rails web foundation, iPhone project, Android project, and the reviewed plan/source package.

The internal-alpha guide says GitHub publication is optional. The designs therefore describe source or a repository the participant controls without implying that a GitHub remote is required.

## Theme index

| Theme | Pencil frame | Type system | Palette | Intended signal |
| --- | --- | --- | --- | --- |
| E1 — Staging Continuity | `rSSkC` | DM Sans, Inter, IBM Plex Mono | Pale blue, navy, cyan, yellow | Familiar evolution of the staging identity; calm and credible |
| E2 — Inspectable Compiler | `k4A0M` | IBM Plex Mono throughout | Near-black, terminal green, cyan | Technical, inspectable, CLI-native; strongest contrast with instant app builders |
| E3 — Soft Expressive | `SSclk` | Space Grotesk, Manrope, DM Mono | Cream, indigo, lavender, coral, sunlight | Friendly, kinetic, native-product energy without looking like Lovable |

## What to compare

Evaluate the themes using the same questions:

1. Does this feel like a credible evolution of First Draft?
2. Can a non-developer understand the promise within five seconds?
3. Does the page feel deliberative and ownable rather than instant and disposable?
4. Is the workshop approachable enough to be the primary near-term offer?
5. Which visual system makes the synchronized web/native story easiest to understand?
6. Which elements should be retained even if the full theme is not selected?

## Implementation implications

- E1 is the lowest-risk transition from staging and maps directly to a conventional Basecoat token set.
- E2 needs careful type sizing and line-length limits. A monospace display system is distinctive; using monospace for every paragraph may be tiring in production.
- E3 places the largest burden on motion quality. The shader, glow, and synchronized scrub need a strong reduced-motion presentation from the beginning.
- The content hierarchy and artifacts should remain stable while evaluating these variables. Avoid mixing all three palettes before review; choose a base system, then borrow specific devices deliberately.

## Converged workshop-first iteration

`F — Workshop-first / Kinetic Working Session` (`rPdbp`) evolves Concept A's copy inside the soft expressive system. It is the first synthesis rather than a fourth neutral theme study.

- Keeps the workshop-first promise: “Bring the app idea. Leave with a foundation you own.”
- Restores Concept A's method, ownership, caveat, audience, and closing language.
- Retains the layered browser progression, real Reading List planning exchange, synchronized web/native scrub, native perimeter glow, and individual workshop deliverables.
- Uses Newsreader, Manrope, and DM Mono with cream, plum, lavender, coral, mint, and sunlight accents.
- Export: `references/theme-studies/rPdbp.png`.
