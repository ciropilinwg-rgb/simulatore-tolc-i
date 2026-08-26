# Integrazione Ufficiale Lotto M4 (FASE 9) — Geometria Piana e Solida

**Data**: 2026-08-25
**Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
**Baseline Git di partenza**: `1e0a3c6d0ed70202948431dcc92c730938d3045b`
**Lotto integrato**: Lotto M4 (25 quesiti originali di Matematica — Geometria piana e solida)
**Stato Approvazione**: Approvato definitivamente dopo FASE 8-TER

---

## 1. Dettagli del Lotto M4 Integrato

- **ID Ufficiali Assegnati**: `398`–`422` (sequenza continua di 25 record, M4-01 → 398 ... M4-25 → 422)
- **Materia**: Matematica (100% dei quesiti)
- **Argomento**: Geometria piana e solida
- **Calibrazione della Difficoltà**:
  - **12 Medio-facili (MF)**: ID 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409
  - **12 Medi (M)**: ID 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421
  - **1 Medio-difficile (MD)**: ID 422
- **Opzioni di Risposta**: Esattamente 1 corretta e 4 errate per ciascun quesito (5 opzioni per record, 100 distrattori totali).
- **Formule KaTeX**: 259 formule analizzate con `throwOnError: true`, **0 errori**.

---

## 2. Punti Chiave e Regression Protections (FASE 8-BIS / 8-TER)

1. **ID 398 (M4-01)**: Sostituzione obbligatoria del template precedente per eliminare duplicazione strutturale con ID 7. Integrato quesito sul calcolo del numero di lati da angolo esterno di $45^\circ$ ($n = 360^\circ / 45^\circ = 8$).
2. **ID 404 (M4-07)**: Figura composta (rettangolo $8\times 4$ + semicircolo $r=4$ su lato 8) con risposta corretta `$32 + 8\pi\text{ cm}^2$`. Collisione con ID 310 / NEWTEST1-Q053 definitivamente azzerata.
3. **ID 406 (M4-09)**: Formulazione adimensionale del rapporto tra la nuova superficie e quella iniziale al triplicare del raggio (risposta `9`).
4. **ID 412 (M4-15)**: Distrattore omogeneo `$400\text{ cm}^2$` (volume scambiato per area) in sostituzione di `$400\text{ cm}^3$`.
5. **ID 416 (M4-19)**: Configurazione numerica autonoma (perimetro $36\text{ cm}$, base $10\text{ cm} \implies$ altezza $12\text{ cm}$, area `$60\text{ cm}^2$`) per evitare riuso dati di M3-25.
6. **ID 420 (M4-23)**: Testo pulito e distrattori corretti `['$4\text{ cm}$', '$6\text{ cm}$', '$5\text{ cm}$', '$12\text{ cm}$']`.
7. **ID 421 (M4-24)**: Distrattori geometrici approvati `['$7\text{ cm}$', '$4\text{ cm}$', '$24\text{ cm}$', '$8\text{ cm}$']`.
8. **ID 422 (M4-25)**: Piramide rombica con superficie totale `$1250\text{ cm}^2$`.

---

## 3. Metriche e Ripartizione Post-Integrazione

| Categoria | Pre-M4 | Incremento M4 | Post-M4 |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | 392 | +25 | **417** |
| **Record Legacy Esclusi** | 35 | 0 | **35** |
| **Pool Attivo TOLC-I** | 357 | +25 | **382** |
| **Matematica (Fisica)** | 193 | +25 | **218** |
| **Matematica (Attiva)** | 192 | +25 | **217** |
| **Logica (Fisica / Attiva)** | 49 / 48 | 0 | **49 / 48** |
| **Scienze (Fisica / Attiva)** | 70 / 68 | 0 | **70 / 68** |
| **Comprensione Verbale (Fisica / Attiva)** | 80 / 49 | 0 | **80 / 49** |

### Equazioni di Bilancio
- **Fisico**: $317\text{ (base)} + 25\text{ (M1)} + 25\text{ (M2)} + 25\text{ (M3)} + 25\text{ (M4)} = 417$
- **Attivo**: $417\text{ (fisici)} - 35\text{ (legacy)} = 382\text{ (attivi)}$
- **Matematica attiva**: $192 + 25 = 217$

---

## 4. Protezione Baseline e Isolamento Legacy

- **392/392 record preesistenti**: Perfettamente identici byte per byte rispetto alla baseline Git `1e0a3c6d0ed70202948431dcc92c730938d3045b`.
- **35 record legacy**: ID `31, 69, 76, 85, 258–287, 315` mantengono `excludedFromTolcPool: true`.
- **Buchi storici preservati**: ID `2, 18, 25, 78, 202` continuano a non esistere.
- **Nessuna alterazione logica**: Le routine di selezione `Casuale`, `Maggiori errori`, `Meno svolte` e i filtri di materia includono i nuovi ID senza modifiche algoritmiche.

---

## 5. Esito Suite di Test e Build

- `npm run test:unit`: **PASS** (192 test passati su 192)
- `npm run test:integration`: **PASS** (48 test passati su 48)
- `npm run audit:questions`: **PASS** (417 record validati, 0 errori)
- `npm run build`: **PASS** (Vite build completata con successo)
- `git diff --check`: **PASS** (Nessun whitespace error o conflitto)

---

## 6. Vincoli di Processo

- Nessun'altra modifica al di fuori dei 5 file autorizzati.
- Nessuna attività avviata sul Lotto M5.
