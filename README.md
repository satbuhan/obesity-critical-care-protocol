# The Adult with Obesity in Emergency and Critical Care

An interactive, referenced walkthrough of the two-step summary for managing
an adult with obesity (BMI ≥30 kg/m²) in emergency and critical care: a
trigger bundle, then nine domains (A–I) that apply **concurrently** — not
a decision tree — each scaled to its own physiological weight descriptor
rather than to BMI itself. Every box can be selected to reveal, in one
place: what the step means, why the review calls for it, the certainty
(GRADE) behind it, and the sources.

**Live site:** https://satbuhan.github.io/obesity-critical-care-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))

## How this tool differs from its sister tools

Every other tool in this atlas converts a branching decision algorithm
(decision diamonds, yes/no forks). This one doesn't have one — the source
figure is explicit that "the domains in Step 2 apply concurrently and are
not a sequential algorithm." So the diagram here is a trigger banner
followed by a 2-up grid of nine standalone domain cards (plus a tenth,
dashed cardiac-arrest aside), with a single connecting arrow from the
trigger to the Step 2 banner and no edges between the domain cards
themselves — because the source doesn't draw any.

## Why this exists

A summary table alone tells a reader *what* each domain recommends but not
*why*, and a reader outside the authors' own team cannot easily check the
evidence behind a specific number (a dose, an effluent-rate target, a
certainty rating). This page keeps the original two-step summary exactly
as authored, and attaches the clinical reasoning and literature to each
box without cluttering the table itself.

The algorithm reproduced here comes from two companion figures by the same
authors — a detailed nine-domain table and a condensed graphical-abstract
infographic of the same structured narrative review (174 PubMed records
screened plus targeted searches; 59 records synthesised; certainty rated
with GRADE). The detailed table is this page's primary source; the
infographic was confirmed, side by side, to be a re-grouped (by weight
descriptor rather than by physiological domain) condensation of the same
content, not an independent source.

## Status

This is a working version, built to be tested on both desktop and mobile.
Unlike this atlas's other four tools, the author team did not have an
existing manuscript or reference list behind this particular figure, so
every reference beyond the source review itself (`REFERENCES[0]`) was
located and independently verified from scratch — a real primary source
opened and checked, not taken from a secondary summary.

As of this build, 5 of the 12 boxes (Step 2 banner, domain C — ventilation,
domain F — antimicrobials, domain H — nutrition, domain I — liberation
from mechanical ventilation) have every bullet point backed by an
independently verified citation. The remaining 7 boxes have at least a
partial citation and are marked `needsAuthor: true` in `assets/content.js`
(and flagged in the UI as "awaiting independently verified citation")
because one or more of their bullet points — mostly Step 1's logistical
bundle items, the specific rocuronium ≥1.2 mg/kg threshold, the specific
enoxaparin/heparin thromboprophylaxis regimens, and the Step 2
circulation/fluids domain — could not be matched to a verifiable primary
source despite a real search attempt. These are flagged, not invented;
see the `kind` field on each reference in `assets/content.js` for exactly
what each source does and doesn't support, including several references
that back the *general* physiological principle (a landmark general-ARDS
or general-ICU trial, say) rather than an obesity-specific trial of the
exact claim.

## Disclaimer

This is an academic / educational reference tool, not a substitute for
institutional protocol or bedside clinical judgement. Verify any dose or
threshold against current local protocol before clinical use.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site
that GitHub Pages can serve directly.

```
index.html          page structure
assets/style.css     design — same paper/ink/navy "journal" aesthetic as
                      the other tools, but a 2-column card grid instead of
                      a branching flowchart (see "How this tool differs")
assets/content.js     ← single source of truth for every box's text,
                      certainty rating, and reference list. Edit this file
                      to change what the page says.
assets/app.js         rendering + interaction (builds the grid from
                      content.js, handles the click-to-expand panel on
                      desktop and the bottom sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box from the
summary (`meaning`, `rationale`, optional `certainty` string, optional
`dose` table, and `refs` pointing at numbered entries in `REFERENCES`).
This tool adds one field not used elsewhere in the atlas — `certainty`
(a plain string, e.g. `"Moderate (PBW scaling); low (PEEP, prone)"`) —
rendered as an italic line under the box heading, matching how the source
table itself prints a GRADE certainty line under each domain's heading.
Add or edit a reference in `REFERENCES` and point to it by `id` from any
node. Never change a node's `label`, `sub`, `certainty`, or `dose` text
without the author team's sign-off — those fields are the algorithm
itself. Every box in this tool carries itemized bullet text as literal
`\n` line breaks inside `sub`, the same convention established in
`nsaid-pain-protocol` — preserve those exactly.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification
process (fidelity rule, content schema, citation verification, QA steps),
written so that any collaborator or AI assistant can pick up this project
in a fresh session and build the next tool the same way.

## License

Content and code are released under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) —
share and adapt with attribution, non-commercially, under the same license.
