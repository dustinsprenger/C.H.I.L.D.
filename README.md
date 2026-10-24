# C.H.I.L.D.

## Comprehensive Harm Interdiction & Lifelong Defense

**Biomonitoring for Innocence Protection · Version 2 · Dustin Sprenger**

C.H.I.L.D. is a proposed child-protection research framework connecting wearable biosensors, local processing, anomaly detection and AI–human guardian teams. It asks how risk signals could reach qualified people earlier while limiting unnecessary collection and circulation of children’s data.

**[Visit the project website](https://dustinsprenger.github.io/C.H.I.L.D./) · [Read the full paper (PDF)](<C.H.I.L.D. - Child Defense Infrastructure v2.pdf>) · [Open the OSF project](https://osf.io/9m253/) · [Cite this work](#citation)**

## Read the paper

| Resource | What it contains |
|---|---|
| [Version 2 paper (PDF)](<C.H.I.L.D. - Child Defense Infrastructure v2.pdf>) | The complete 32-page research manuscript. |
| [Version 2 manuscript (Word)](<C.H.I.L.D. - Child Defense Infrastructure v2.docx>) | The original editable manuscript. |
| [Conceptual architecture](<C.H.I.L.D. Conceptual Architecture.png>) | The original full-resolution system diagram. |
| [OSF publication](https://doi.org/10.17605/OSF.IO/9M253) | The linked research record and DOI. |

The paper files and architecture image are preserved unchanged. This repository contains the specification and diagram; it does not supply a deployed safeguarding service or tested reference implementation.

## Research overview

C.H.I.L.D. proposes a distributed child-protection infrastructure combining wearable biosensors, local anomaly detection, minimized event signals and AI–human guardian teams. The framework describes how changes in an individual child’s physiological patterns, movement, proximity and expected presence could inform contextual risk review. It organizes responses through graduated risk states, bounded retention, consent-aware routing and qualified human oversight. Its intended contribution is a technical and governance framework for child abuse prevention, safeguarding intervention and privacy-preserving monitoring. Detection performance, false-positive control and safeguarding outcomes require independent evaluation.

The intended audience includes safeguarding and child-welfare researchers, clinicians, wearable-device engineers, biosignal-processing researchers, privacy specialists and people with lived experience contributing through supported research settings.

## How the proposed architecture works

1. **Sense and interpret locally.** Wearable and local devices establish individual baselines and detect deviations in physiological, movement or contextual signals.
2. **Minimize and route events.** Raw signals are reduced to an interpretable event vocabulary, with consent, encryption and routing constraints.
3. **Review context with people.** AI-assisted Guardian services support human review; physiological anomalies alone do not establish that abuse has occurred.
4. **Escalate proportionately.** Green, Yellow, Red and silence-related states guide response, acknowledgment, retention and follow-up within the proposed framework.

The design emphasizes local processing, data minimization, human oversight, proportional retention and equity of access. The paper discusses independent, survivor-informed governance and boundaries on institutional or commercial control. Its AI-Guardian service model includes a proposed independent nonprofit oversight layer.

## Architecture

[![C.H.I.L.D. conceptual architecture showing local sensing, risk states, event routing and human review](<C.H.I.L.D. Conceptual Architecture.png>)](<C.H.I.L.D. Conceptual Architecture.png>)

[Open the original diagram at full resolution](<C.H.I.L.D. Conceptual Architecture.png>). It is a wide system map; the website also provides a readable overview of the main stages.

## Independent evaluation

The proposed sensing, risk classification, escalation and governance mechanisms require independent evaluation. Research priorities include detection validity, false positives and missed events, consent and coercion, access controls, supported human review and effects on children and families. The specification should not be treated as a validated diagnostic tool or an operational emergency service.

Technical critiques and independent research proposals are welcome. Please keep the canonical paper intact; propose clarifications through a separate change or an independent analysis. Do not include identifiable information about children in public repository contributions.

## Citation

> Sprenger, D. (2025). C.H.I.L.D. — Comprehensive Harm Interdiction & Lifelong Defense: Biomonitoring for Innocence Protection (Version 2) [Research framework]. https://doi.org/10.17605/OSF.IO/9M253

Use GitHub’s **Cite this repository** button, [download BibTeX](citation.bib), or use [CITATION.cff](CITATION.cff). The 2025 year refers to the v2 manuscript recorded in this repository on [14 December 2025](https://github.com/dustinsprenger/C.H.I.L.D./commit/db9be5b906592cea76f2790210629f31dd0c4fca). The PDF was added on [5 April 2026](https://github.com/dustinsprenger/C.H.I.L.D./commit/b10512b863f84e0477806dee05cf81e860adaa7b); the OSF DOI identifies the linked research record.

## Authorship and acknowledgments

Conceptual origin by **Dustin Sprenger**. Original elaboration and formulation used Perplexity AI; adjusted logic and the earlier abstract used GPT-5.1. The conceptual architecture was created with Eraser using prompts from GPT-5.1. This work is informed by *Innocence Lost: A Freudian Essay on Childhood Sexual Abuse*. The project website and this README were prepared with OpenAI assistance from the existing materials.

The version 2 paper remains the authoritative specification. Consult the paper and linked OSF record for the author’s reuse terms; this website update does not introduce a new license.
