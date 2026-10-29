/* =========================================================================
   Content data for the interactive "adult with obesity in emergency and
   critical care" summary. Every clinical claim below is paraphrased from
   the cited source, not copied from it. Reference numbers match REFERENCES
   below and the printed list in index.html.

   Reference 1 is the authors' own structured narrative review (this tool's
   two source figures: a full two-step domain table, and a condensed
   graphical-abstract infographic of the same review) whose algorithm is
   reproduced, unchanged, on this page. The detailed nine-domain table is
   treated as the primary source for every node's label/sub text, because
   the infographic is a condensed, re-grouped (by weight descriptor rather
   than by physiological domain) derivative of the same underlying review —
   confirmed identical in content, not just similar, on side-by-side
   comparison of the two figures. Unlike this atlas's other four tools, the
   author team did not have a manuscript/reference list behind this figure
   to start from, so references 2 onward were located and independently
   verified from scratch, not extracted from an existing bibliography.
   Several support the general physiological principle behind a claim
   (e.g. a landmark general-ARDS or general-ICU trial) rather than an
   obesity-specific trial of the exact claim — that distinction is stated
   directly in each reference's `kind` field, the same convention this
   atlas uses for a multi-arm trial whose comparison was only partially
   drawn from it (see nsaid-pain-protocol). Anything not independently
   verified cites only [1] and carries `needsAuthor: true` — flagged, never
   invented.
   ========================================================================= */

const REFERENCES = [
  {
    id: 1,
    kind: "Structured narrative review — source of this algorithm",
    text: "Karcıoğlu Ö, Bozatlı SBH. Body mass index in emergency and critical care: a trigger, not a dosing scale. Manuscript in preparation. Structured PubMed search (174 records) plus targeted searches; 59 records synthesised; certainty of each domain rated with GRADE. This page's algorithm is reproduced, unchanged, from that review's two-step summary: a trigger (BMI ≥30 kg/m² activates an obesity care bundle) followed by nine concurrent physiological domains (A–I), each scaled to its own weight descriptor rather than to BMI.",
    url: null
  },
  {
    id: 2,
    kind: "Society consensus guidance",
    text: "Joshi GP, Abdelmalak BB, Weigel WA, Soriano SG, Harbell MW, Kuo CI, Stricker PA, Domino KB. American Society of Anesthesiologists Consensus-Based Guidance on Preoperative Management of Patients (Adults and Children) on Glucagon-Like Peptide-1 (GLP-1) Receptor Agonists. American Society of Anesthesiologists, 29 June 2023.",
    url: "https://www.asahq.org/about-asa/newsroom/news-releases/2023/06/american-society-of-anesthesiologists-consensus-based-guidance-on-preoperative"
  },
  {
    id: 3,
    kind: "Randomized crossover study",
    text: "Collins JS, Lemmens HJM, Brodsky JB, Brock-Utne JG, Levitan RM. Laryngoscopy and morbid obesity: a comparison of the \"sniff\" and \"ramped\" positions. Obesity Surgery. 2004;14(9):1171–1175.",
    url: "https://doi.org/10.1381/0960892042386869"
  },
  {
    id: 4,
    kind: "Randomized controlled study",
    text: "Futier E, Constantin JM, Pelosi P, Chanques G, Massone A, Petit A, et al. Noninvasive ventilation and alveolar recruitment maneuver improve respiratory function during and after intubation of morbidly obese patients. Anesthesiology. 2011;114(6):1354–1363.",
    url: "https://doi.org/10.1097/ALN.0b013e31821811ba"
  },
  {
    id: 5,
    kind: "Pharmacokinetic study",
    text: "Lemmens HJ, Brodsky JB. The dose of succinylcholine in morbid obesity. Anesthesia & Analgesia. 2006;102(2):438–442.",
    url: "https://doi.org/10.1213/01.ane.0000194876.00551.0e"
  },
  {
    id: 6,
    kind: "Pharmacokinetic study",
    text: "Ingrande J, Brodsky JB, Lemmens HJ. Lean body weight scalar for the anesthetic induction dose of propofol in morbidly obese subjects. Anesthesia & Analgesia. 2011;113(1):57–62.",
    url: "https://doi.org/10.1213/ANE.0b013e3181f6d9c0"
  },
  {
    id: 7,
    kind: "Prospective observational non-inferiority study (does not itself state a 1.2 mg/kg threshold — supports the general under-dosing concern, not that specific figure)",
    text: "McDowell M, Lewandowski A, Desai D, Nunez Cruz S, Glowacki N, Sulh A, Cirone M, Lomotan N, Hormese M. Rocuronium dosing by ideal vs total body weight in obesity: a prospective, observational non-inferiority study. Western Journal of Emergency Medicine. 2024;25(1):22–27.",
    url: "https://doi.org/10.5811/westjem.60713"
  },
  {
    id: 8,
    kind: "Randomized controlled trial — general ARDS population, not obesity-specific (the landmark trial establishing predicted-body-weight tidal-volume scaling)",
    text: "The Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome. New England Journal of Medicine. 2000;342(18):1301–1308.",
    url: "https://doi.org/10.1056/NEJM200005043421801"
  },
  {
    id: 9,
    kind: "Randomized controlled trial — obesity-specific (BMI >35), but a surgical/intraoperative population, not critical care",
    text: "PROBESE Collaborative Group. Effect of intraoperative high positive end-expiratory pressure (PEEP) with recruitment maneuvers vs low PEEP on postoperative pulmonary complications in obese patients: a randomized clinical trial. JAMA. 2019;321(23):2292–2305.",
    url: "https://doi.org/10.1001/jama.2019.7505"
  },
  {
    id: 10,
    kind: "Pooled analysis of randomized trial data — general ARDS population, not obesity-specific",
    text: "Amato MBP, Meade MO, Slutsky AS, et al. Driving pressure and survival in the acute respiratory distress syndrome. New England Journal of Medicine. 2015;372(8):747–755.",
    url: "https://doi.org/10.1056/NEJMsa1410639"
  },
  {
    id: 11,
    kind: "Randomized controlled trial (PROSEVA) — general severe-ARDS population (PaO₂/FiO₂ <150 was the trial's own enrolment cut-off), not obesity-specific",
    text: "Guérin C, Reignier J, Richard JC, et al. Prone positioning in severe acute respiratory distress syndrome. New England Journal of Medicine. 2013;368(23):2159–2168.",
    url: "https://doi.org/10.1056/NEJMoa1214103"
  },
  {
    id: 12,
    kind: "Narrative review — argues against simple linear total-body-weight dosing for maintenance; supports a larger loading dose plus clearance/TDM-guided maintenance",
    text: "Hanrahan TP, Lipman J, Roberts JA. Antibiotic dosing in obesity: a big challenge. Critical Care. 2016;20:240.",
    url: "https://doi.org/10.1186/s13054-016-1426-y"
  },
  {
    id: 13,
    kind: "Randomized controlled trial (RENAL study) — found no outcome benefit from a higher (40 mL/kg/h) CRRT intensity over a lower one (25 mL/kg/h), supporting the ~20–25 mL/kg/h target",
    text: "The RENAL Replacement Therapy Study Investigators. Intensity of continuous renal-replacement therapy in critically ill patients. New England Journal of Medicine. 2009;361(17):1627–1638.",
    url: "https://doi.org/10.1056/NEJMoa0902413"
  },
  {
    id: 14,
    kind: "Clinical practice guideline — the 20–25 mL/kg/h effluent-dose figure appears in the guideline's rationale discussion (informed by the RENAL trial and others), not as a separately numbered graded recommendation",
    text: "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO clinical practice guideline for acute kidney injury. Kidney International Supplements. 2012;2(1):1–138.",
    url: "https://kdigo.org/guidelines/acute-kidney-injury/"
  },
  {
    id: 15,
    kind: "Observational cohort study — critically ill (not orthopedic-only) population; supports fixed-dose thromboprophylaxis becoming inadequate as weight rises, not the specific enoxaparin/heparin regimens named in this box",
    text: "Yi G, Deane AM, Ankravs M, Sharrock L, Anstey J, Abdelhamid YA. A fixed dose approach to thrombosis chemoprophylaxis may be inadequate in heavier critically ill patients. Critical Care and Resuscitation. 2021;23(1):94–102.",
    url: "https://doi.org/10.51893/2021.1.oa9"
  },
  {
    id: 16,
    kind: "Society clinical guideline",
    text: "Choban P, Dickerson R, Malone A, Worthington P, Compher C; American Society for Parenteral and Enteral Nutrition. A.S.P.E.N. clinical guidelines: nutrition support of hospitalized adult patients with obesity. Journal of Parenteral and Enteral Nutrition. 2013;37(6):714–744.",
    url: "https://doi.org/10.1177/0148607113499374"
  },
  {
    id: 17,
    kind: "Systematic review — found IV glucose given without prior thiamine was a contributing factor in a substantial minority of post-bariatric Wernicke encephalopathy cases; supports, but does not itself state as a formal rule, \"thiamine before glucose\"",
    text: "Aasheim ET. Wernicke encephalopathy after bariatric surgery: a systematic review. Annals of Surgery. 2008;248(5):714–720.",
    url: "https://doi.org/10.1097/SLA.0b013e3181884308"
  },
  {
    id: 18,
    kind: "ILCOR scoping review — found too little evidence to clearly support or refute specific CPR technique adjustments (firm surface, compressor rotation, device choice, defibrillation energy) in obesity; cited here for that finding, which is itself the reason this box is framed as training/equipment planning rather than a trial-backed instruction",
    text: "Considine J, Couper K, Greif R, et al, on behalf of the International Liaison Committee on Resuscitation Basic Life Support, Advanced Life Support, Paediatric Life Support, and Education, Implementation and Teams Task Forces. Cardiopulmonary resuscitation in obese patients: a scoping review. Resuscitation Plus. 2024;20:100820.",
    url: "https://doi.org/10.1016/j.resplu.2024.100820"
  },
  {
    id: 19,
    kind: "Multicentre randomized controlled trial (EXTUB-OBESE) — the adequately powered RCT this box refers to",
    text: "De Jong A, Bignon A, Stephan F, et al, for the EXTUB-OBESE trial group. Effect of non-invasive ventilation after extubation in critically ill patients with obesity in France: a multicentre, unblinded, pragmatic randomised clinical trial. Lancet Respiratory Medicine. 2023;11(6):530–539.",
    url: "https://doi.org/10.1016/S2213-2600(22)00529-X"
  },
  {
    id: 20,
    kind: "Narrative review — general ICU sarcopenia-assessment methodology (CT/ultrasound/bioimpedance), not specific to sarcopenic obesity",
    text: "Ruiz-Santana S, Hernández-Socorro CR. Novel tools to assess muscle sarcopenic process in ICU patients: are they worthwhile? Journal of Clinical Medicine. 2023;12(10):3473.",
    url: "https://doi.org/10.3390/jcm12103473"
  }
];

const NODES = [
  {
    id: "trigger",
    type: "terminal",
    tone: "key",
    label: "STEP 1 — TRIGGER: BMI ≥ 30 kg/m² activates the obesity care bundle",
    sub:
      "• Measure height and weight rather than estimating them; calculate predicted body weight (PBW) from height and sex and record it.\n• Weight-rated trolley, bed and hoist; correctly sized blood-pressure cuffs; extra-long procedural equipment.\n• Confirm CT table weight and gantry limits before transfer; ultrasound-guided vascular access as default, early intraosseous access if peripheral attempts fail.\n• Early pharmacist review of every weight-based dose, with the weight descriptor recorded alongside the dose.\n• Any patient taking a GLP-1 receptor agonist is managed as having a full stomach.",
    meaning:
      "A single, simple threshold — BMI ≥30 kg/m² — opens a bundle of logistical and safety checks that have nothing to do with drug dosing yet: measured (not guessed) anthropometrics, weight-rated equipment, imaging-table limits, vascular access planning, a pharmacist safety net on every subsequent weight-based dose, and a standing assumption that a GLP-1 receptor agonist means delayed gastric emptying. None of this is drug-dose scaling — that question is deliberately deferred to Step 2, domain by domain.",
    rationale:
      "Separating the trigger bundle from the dosing decisions keeps the two kinds of error apart: missing a weight-rated bed or an oversized BP cuff is an equipment failure, not a pharmacology one, and bundling both into a single BMI-triggered checklist means neither gets forgotten while the clinical team is focused on the other.",
    refs: [1, 2],
    needsAuthor: true
  },
  {
    id: "step2_intro",
    type: "process",
    tone: "key",
    label: "STEP 2 — SCALE EACH DECISION TO ITS OWN PHYSIOLOGICAL DESCRIPTOR, NOT TO BMI",
    meaning:
      "The nine domains below (A–I) are not steps in a sequence and do not branch from one another — they apply concurrently, to the same patient, for as long as the obesity care bundle is active. Each domain answers one narrow question: for this particular drug, device setting, or target, which body-weight descriptor (lean, total, predicted, ideal/adjusted, or none at all) should the number actually be calculated from. BMI itself is never the scaling variable for any individual decision — it is only the trigger that activates the bundle in Step 1.",
    rationale:
      "A single \"obesity dose adjustment\" rule of thumb would be wrong in at least half of these domains, because the physiological reason obesity changes a given decision is different for each one — volume of distribution for induction agents, lung size for tidal volume, renal clearance for antimicrobials, and so on. Scaling every domain to the descriptor that actually tracks the relevant physiology, rather than to a single body-size number, is the review's central organising idea.",
    refs: [1]
  },
  {
    id: "domain_airway",
    type: "process",
    label: "A. Airway and preoxygenation",
    certainty: "Moderate (hypoxaemia risk); low (devices)",
    sub:
      "• Anticipate difficult laryngoscopy and a short safe apnoea time.\n• Ramped or head-up position, external auditory meatus level with the sternal notch.\n• Positive-pressure (non-invasive ventilation) preoxygenation plus apnoeic oxygenation.\n• Videolaryngoscope as the first device.",
    meaning:
      "Obesity reduces functional residual capacity and increases oxygen consumption, so a patient with obesity desaturates faster once apnoeic than a patient of normal weight — the safe window for a failed first attempt is genuinely shorter, not just theoretically so. The ramped or head-up position and ear-to-sternal-notch alignment are positioning fixes aimed at restoring a view that excess chest-wall and neck soft tissue otherwise obscures in the standard supine sniffing position, and were shown in a randomized crossover comparison to improve the laryngoscopic view compared with the standard sniffing position. Positive-pressure preoxygenation combined with an alveolar recruitment manoeuvre around intubation, rather than plain tidal breathing on a facemask, was shown in a randomized trial to improve oxygenation during and after intubation in patients with morbid obesity.",
    rationale:
      "Naming videolaryngoscopy as the first device, not a rescue device, reflects that direct laryngoscopy is disproportionately harder in obesity for anatomical reasons that don't resolve with extra attempts — escalating to it only after a failed direct view costs time the shortened apnoea tolerance in this population may not allow.",
    refs: [1, 3, 4],
    needsAuthor: true
  },
  {
    id: "domain_induction",
    type: "process",
    label: "B. Induction and neuromuscular blockade",
    certainty: "Low",
    sub:
      "• Propofol induction bolus on lean body weight; titrate to effect.\n• Succinylcholine (suxamethonium) on total body weight.\n• Rocuronium for RSI: avoid under-dosing (≥ 1.2 mg/kg; no default fixed 100 mg); sugammadex should be available.\n• Blocker infusions on ideal body weight, titrated to train-of-four.",
    meaning:
      "The four drugs in this domain are scaled to four different weight descriptors because each tracks a different pharmacokinetic property. A pharmacokinetic study in morbidly obese subjects found that scaling the propofol induction dose to lean rather than total body weight avoided over-dosing while still achieving reliable anaesthetic effect, since the induction effect depends on the dose reaching the brain fast, which tracks lean rather than fat mass. A separate pharmacokinetic study found succinylcholine's onset depends on plasma cholinesterase activity and extracellular distribution, both of which scale with total body weight, so underdosing by lean weight risks an inadequately paralysed, harder airway. Rocuronium for rapid sequence induction is deliberately flagged against a fixed 100 mg dose, because a fixed adult dose under-doses a larger patient exactly when a fast, reliable onset matters most; an observational non-inferiority study comparing ideal- and total-body-weight rocuronium dosing in obesity supports that general under-dosing concern, and sugammadex availability is named alongside the higher dose as the reversal safety net. Ongoing blocker infusions, by contrast, are titrated to a measured endpoint (train-of-four) on ideal body weight as a starting point, because a continuous infusion can be adjusted against real-time monitoring in a way a single bolus cannot.",
    rationale:
      "Giving each drug its own descriptor rather than one blanket \"reduce the dose in obesity\" instruction prevents the two most common obesity-anaesthesia errors in opposite directions at once: over-sedating on an induction agent dosed by total body weight, and under-paralysing a succinylcholine or rocuronium dose scaled down too far.",
    refs: [1, 5, 6, 7],
    needsAuthor: true
  },
  {
    id: "domain_ventilation",
    type: "process",
    label: "C. Mechanical ventilation",
    certainty: "Moderate (PBW scaling); low (PEEP, prone)",
    sub:
      "• Low tidal volume, about 6 mL/kg PBW, with or without ARDS; never actual body weight.\n• Individualise PEEP (oesophageal manometry or electrical impedance tomography).\n• Keep driving pressure ≤ 15 cmH₂O; prone if PaO₂/FiO₂ < 150.",
    meaning:
      "Lung size, and therefore safe tidal volume, tracks height and sex far more closely than it tracks total body weight — adipose tissue does not need ventilating. The landmark ARDS Network trial established scaling tidal volume to predicted rather than actual body weight as the lung-protective standard; scaling to actual body weight in a patient with obesity delivers a volume calculated for lungs much larger than the ones actually being ventilated, risking volutrauma, regardless of whether the patient also has ARDS. Because obesity raises intra-abdominal and chest-wall pressure, a randomized trial in obese surgical patients found that an individualised, higher-PEEP strategy with recruitment manoeuvres reduced postoperative pulmonary complications compared with a low, fixed PEEP level — which is why this domain calls for individualising PEEP against a direct measurement (oesophageal manometry) or a bedside imaging surrogate (electrical impedance tomography) rather than a fixed number. Driving pressure (plateau pressure minus PEEP) and proning at a PaO₂/FiO₂ ratio below 150 both extend standard ARDS lung-protective practice — a pooled analysis linking driving pressure to survival, and the PROSEVA trial's own enrolment threshold for proning — into this population rather than replacing it.",
    rationale:
      "Pairing \"never actual body weight\" directly with the tidal-volume instruction closes off the most common and most consequential scaling error in this domain — a volume that looks conservative relative to the patient's real weight can still be a volutrauma-generating volume relative to their actual lung size.",
    refs: [1, 8, 9, 10, 11]
  },
  {
    id: "domain_circulation",
    type: "process",
    label: "D. Circulation and fluids",
    certainty: "Very low",
    sub:
      "• Initial crystalloid bolus on adjusted or ideal body weight.\n• Move early to dynamic assessment of fluid responsiveness.\n• Vasopressors non-weight-based (micrograms/min), titrated to mean arterial pressure.",
    meaning:
      "An initial fluid bolus calculated on actual body weight in a patient with obesity can substantially over-deliver volume, since circulating blood volume and extracellular fluid do not expand in proportion to fat mass — adjusted or ideal body weight is used instead as a closer approximation of the compartment actually being filled. Moving early to a dynamic measure of fluid responsiveness, rather than continuing fixed-volume boluses, matters more in this population because raised intra-abdominal pressure and reduced chest-wall compliance make standard dynamic indices themselves harder to interpret in obesity, not just static measures. Vasopressors are dosed in absolute micrograms per minute, titrated to a measured mean arterial pressure target, rather than on any weight-based scale at all, because their endpoint is directly observable at the bedside in a way a fluid bolus's effect is not.",
    rationale:
      "This is the domain the review rates with the least confidence of the nine. A literature search for this page did not find a trial establishing that adjusted- or ideal-body-weight fluid dosing specifically improves outcomes in critically ill patients with obesity — one retrospective study on body-weight-adjusted fluid dosing in sepsis found an association between mortality and under-dosing by actual body weight, not evidence favouring adjusted or ideal weight, and cautioned against departing from standard practice without further study. That gap in the literature is itself consistent with the review's very-low-certainty rating for this domain.",
    refs: [1],
    needsAuthor: true
  },
  {
    id: "domain_kidney",
    type: "process",
    label: "E. Kidney function and renal replacement",
    certainty: "Very low",
    sub:
      "• Creatinine-based GFR estimates are unreliable in obesity.\n• CRRT: target a delivered effluent dose of 20–25 mL/kg/h; state the weight descriptor used and avoid the very large absolute doses produced by actual body weight.",
    meaning:
      "Serum creatinine is generated by muscle, not fat, and most GFR-estimating equations assume a body composition that no longer holds once fat mass is substantially elevated — the result can look reassuringly normal while true clearance is actually reduced, or vice versa. For continuous renal replacement therapy, a large randomized trial found no outcome benefit from a higher (40 mL/kg/h) effluent dose over a lower one (25 mL/kg/h), and the KDIGO acute kidney injury guideline's own rationale discussion cites that trial evidence in settling on roughly 20–25 mL/kg/h as the target delivered dose. Applying that target to actual body weight in a patient with severe obesity can generate an absolute prescribed dose far above what is clinically intended or deliverable, which is why the domain specifically calls for stating which weight descriptor the dose was calculated from.",
    rationale:
      "Flagging the weight descriptor alongside every CRRT prescription, rather than just the final mL/h number, is what lets a second clinician catch a scaling error before it compounds — an effluent dose that looks plausible in isolation can still be calculated from the wrong starting weight.",
    refs: [1, 13, 14],
    needsAuthor: true
  },
  {
    id: "domain_antimicrobials",
    type: "process",
    label: "F. Antimicrobials",
    certainty: "Moderate (PK); very low (outcomes)",
    sub:
      "• Loading dose on total body weight; never reduce the first dose for body size.\n• Maintenance guided by clearance and therapeutic drug monitoring.",
    meaning:
      "A loading dose exists to fill the entire volume of distribution quickly, and that volume is larger — not just the lean-tissue fraction of it — in a patient with obesity, so scaling the first dose down for body size risks subtherapeutic early concentrations at exactly the point in sepsis management when source control has not yet happened. A narrative review of antimicrobial dosing in obesity argues against simple linear total-body-weight correlations for ongoing dosing specifically, and instead calls for maintenance to be guided by measured clearance and therapeutic drug monitoring where available — the loading dose and the maintenance dose are different pharmacokinetic problems, and this domain treats them as such.",
    rationale:
      "Splitting \"never reduce the first dose\" from \"maintenance guided by clearance\" into two separate instructions prevents the single most common antimicrobial-dosing error in obesity — treating the loading dose and the maintenance dose as the same scaling problem, when the pharmacokinetic principle behind each is different.",
    refs: [1, 12]
  },
  {
    id: "domain_thromboprophylaxis",
    type: "process",
    label: "G. Thromboprophylaxis",
    certainty: "Low",
    sub:
      "• Fixed standard doses become sub-prophylactic as BMI rises.\n• Enoxaparin 40 mg twice daily or about 0.5 mg/kg daily; verify with anti-factor Xa where available.\n• Unfractionated heparin 7500 units three times daily if renal function is poor or bleeding risk high.",
    meaning:
      "A fixed once- or twice-daily low-molecular-weight heparin dose was established in trial populations of average body size; an observational study in critically ill patients found that a fixed-dose approach to thrombosis chemoprophylaxis becomes progressively less adequate as patient weight rises — a dose that is genuinely prophylactic at a normal BMI can become sub-prophylactic in obesity without any dosing error having occurred, the dose simply didn't scale. The two named regimens (weight-adjusted or higher fixed-dose enoxaparin; thrice-daily unfractionated heparin when renal function or bleeding risk makes a longer-acting agent less attractive) are both ways of correcting for that, with anti-factor Xa monitoring offered as a direct check on whether the chosen dose actually achieved a prophylactic level in that specific patient.",
    rationale:
      "Stating explicitly that fixed doses \"become\" sub-prophylactic, rather than simply listing a higher dose, makes the point that this is a dose-response problem that gets silently worse as BMI increases — not a threshold a clinician either crosses or doesn't.",
    refs: [1, 15],
    needsAuthor: true
  },
  {
    id: "domain_nutrition",
    type: "process",
    label: "H. Nutrition and body composition",
    certainty: "Low",
    sub:
      "• High-protein hypocaloric feeding: 11–14 kcal/kg actual body weight/day; protein 2.0–2.5 g/kg ideal body weight/day.\n• Look for sarcopenic obesity (CT or muscle ultrasound); interpret bioimpedance cautiously in oedema.\n• Bariatric history: thiamine before glucose.",
    meaning:
      "A society clinical guideline for nutrition support in hospitalized adults with obesity recommends hypocaloric, high-protein feeding — deliberately under-delivering calories relative to actual body weight, since much of that weight is energy-dense fat that does not need replacing acutely, while protecting lean mass with a protein target calculated on ideal body weight, which tracks the muscle actually at risk of catabolism. Sarcopenic obesity — reduced muscle mass hidden inside a high overall BMI — is actively screened for with imaging-based tools (CT or muscle ultrasound) because it changes the nutrition and mobility plan even though the patient looks well-nourished by weight alone; bioimpedance is flagged as unreliable in the presence of oedema because fluid shifts distort its electrical measurements independent of true body composition. A systematic review of Wernicke encephalopathy after bariatric surgery found that intravenous glucose given without prior thiamine was a contributing factor in a substantial minority of cases, supporting the practice of giving thiamine before glucose in a patient with that history.",
    rationale:
      "Grouping calorie target, protein target, body-composition screening, and the thiamine-before-glucose rule into one domain reflects that all four are really the same underlying problem — a high BMI can conceal rather than rule out malnutrition, and each instruction corrects for a different way that concealment can go wrong.",
    refs: [1, 16, 17, 20]
  },
  {
    id: "domain_liberation",
    type: "process",
    tone: "key",
    label: "I. Liberation from mechanical ventilation",
    certainty: "Moderate",
    sub:
      "Extubate onto prophylactic non-invasive ventilation — the only intervention here supported by an adequately powered randomised trial in a critically ill population with obesity.",
    meaning:
      "Reduced functional residual capacity and a higher closing volume make a patient with obesity more prone to post-extubation atelectasis and reintubation than a patient of normal weight, independent of the reason they were ventilated in the first place. The EXTUB-OBESE trial — a multicentre, pragmatic randomised trial across 39 French ICUs in critically ill patients with obesity — found that planning extubation directly onto prophylactic non-invasive ventilation, rather than reactively starting it only if the patient deteriorated afterward, reduced extubation failure. It is the specific adequately-powered RCT this domain refers to.",
    rationale:
      "Calling this out as the single adequately-powered-RCT-backed recommendation in the table is itself an important piece of information for a reader — it tells them where to hold a practice firmly versus where the rest of the domains are reasoned extrapolation from physiology and lower-certainty evidence.",
    refs: [1, 19]
  },
  {
    id: "cardiac_arrest",
    type: "process",
    tone: "note",
    label:
      "Cardiac arrest: follow the standard ALS/ACLS algorithm. Obesity-specific considerations (firm surface, early compressor rotation, mechanical compression devices, defibrillation energy) inform training and equipment planning; see Section 3.6.",
    meaning:
      "This note deliberately sits outside the nine numbered domains: cardiac arrest management in a patient with obesity is not a variant algorithm, it is the standard ALS/ACLS algorithm, with a short list of logistical and training considerations layered on top rather than a different resuscitation pathway. A firm surface and earlier compressor rotation address the extra physical effort of generating adequate chest compression depth through a larger chest wall; mechanical compression devices and defibrillation energy are named as equipment and dosing questions to plan for in advance rather than improvise during the arrest itself. A 2024 ILCOR scoping review looked specifically for trial evidence behind adjustments like these and found too little to clearly support or refute any of them — which is itself why this box is framed as training and equipment planning rather than as a trial-backed instruction.",
    rationale:
      "Keeping this as a dashed-border aside rather than a tenth domain reflects how the source table itself presents it — a cross-reference to a fuller discussion elsewhere in the review (Section 3.6, not available to this page), not a physiological-descriptor decision of the same kind as A–I.",
    refs: [1, 18],
    needsAuthor: true
  }
];

const GLOSSARY = [
  { match: "PBW", full: "predicted body weight", def: "A weight calculated from height and sex (not measured), used here as the scaling variable for tidal volume because lung size tracks height and sex far more closely than it tracks actual body weight." },
  { match: "GFR", full: "glomerular filtration rate", def: "A measure of kidney filtering capacity. Creatinine-based estimates of it are unreliable in obesity because serum creatinine generation depends on muscle mass, not fat mass." },
  { match: "CRRT", full: "continuous renal replacement therapy", def: "Continuous (rather than intermittent) dialysis used in critically ill patients, typically dosed by a target effluent (filtered fluid) rate per kilogram per hour." },
  { match: "ARDS", full: "acute respiratory distress syndrome", def: "Severe, diffuse acute lung injury causing hypoxaemia. Low-tidal-volume, lung-protective ventilation principles apply with or without a formal ARDS diagnosis in patients with obesity." },
  { match: "PEEP", full: "positive end-expiratory pressure", def: "Pressure maintained in the airway at the end of expiration to keep alveoli open. Individualised in obesity because chest-wall and abdominal pressure change how much PEEP is actually needed." },
  { match: "RSI", full: "rapid sequence induction", def: "A fast-onset induction and paralysis technique used when aspiration risk is high. The review specifically warns against under-dosing rocuronium for RSI by using a fixed adult dose." },
  { match: "GLP-1", full: "glucagon-like peptide-1", def: "A hormone class targeted by drugs (receptor agonists) that slow gastric emptying — the reason patients taking one are managed as having a full stomach regardless of reported fasting time." },
  { match: "driving pressure", def: "Plateau airway pressure minus PEEP — a marker of lung stress during mechanical ventilation. Kept at or below 15 cmH₂O as an extension of standard lung-protective ventilation targets." },
  { match: "train-of-four", def: "A nerve-stimulator monitoring pattern used to titrate ongoing neuromuscular blocker infusions to a measured depth of paralysis, rather than to a fixed infusion rate." },
  { match: "anti-factor Xa", def: "A blood test measuring the activity of low-molecular-weight heparin, used to confirm that a thromboprophylaxis dose is actually achieving a prophylactic level rather than assuming it from the dose alone." }
];
