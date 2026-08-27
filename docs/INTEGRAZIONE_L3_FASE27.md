# Documento di Integrazione e Collaudo — Lotto L3 (FASE 27)

## 1. Dati Generali e Baseline

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git consolidata**: `04db3334b3a3245772d3d44c468e2ac3adaa0a37` (*"Integra lotto L2 e aggiorna test"*)
- **Dataset Frozen integrato**: `scratch/L3-50-quesiti.json`
- **Dimensione file frozen**: `66.638 byte`
- **SHA-256 frozen**: `5042aeab98e9e1da622d6d1befadca13426af0eb58e4f3a4fba909c494db6917`

---

## 2. Dati del Lotto L3

- **Materia**: Logica (50/50)
- **Range ID**: `738` $\to$ `787` (50 quesiti consecutivi e strettamente univoci)
- **Stato TOLC-I**: 50/50 attivi (`excludedFromTolcPool !== true`)
- **Distribuzione difficoltà**: `3 Medio-Facili (MF) + 44 Medi (M) + 3 Medio-Difficili (MD)`
  - **Medio-Facili (3)**: `L3-01` (ID 738), `L3-17` (ID 754), `L3-34` (ID 771)
  - **Medio-Difficili (3)**: `L3-16` (ID 753), `L3-33` (ID 770), `L3-50` (ID 787)
  - **Medi (44)**: restanti 44 quesiti del lotto
- **Correzione specifica su L3-16 (ID 753)**:
  - Spiegazione corretta con derivazione formale a 5 passi e confutazione della terna $\{R_1, R_2, R_3\}$ per violazione del vincolo 4 ($\neg R_4 \to R_5$).

---

## 3. Conteggi della Banca Dati Prima e Dopo l'Integrazione

| Parametro | Pre-Integrazione (L2) | Post-Integrazione (L3) | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | `732` | `782` | `+50` |
| **Record Attivi TOLC-I** | `697` | `747` | `+50` |
| **Record Legacy Esclusi** | `35` | `35` | `0` |
| **ID Massimo** | `737` | `787` | `+50` |
| **Equazione di Bilancio** | $697 + 35 = 732$ | $747 + 35 = 782$ | **Verificata** |

### Ripartizione per Materia

| Materia | Fisici Pre | Fisici Post | Attivi Pre | Attivi Post | Legacy |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 |
| **Logica** | 149 | **199** | 148 | **198** | 1 |
| **Scienze** | 252 | 252 | 250 | 250 | 2 |
| **Comprensione verbale** | 80 | 80 | 49 | 49 | 31 |
| **TOTALE** | **732** | **782** | **697** | **747** | **35** |

### Gap Storici Preservati
I gap storici `2`, `18`, `25`, `78`, `202` risultano **tutti assenti** come prescritto.

---

## 4. Invarianza dei 732 Record Preesistenti e Parità Frozen/Runtime

1. **Invarianza dei 732 record preesistenti (ID $\le$ 737)**:
   - Confronto integrale contro lo snapshot pre-inserimento: **`732 / 732 MATCH (100% invariati)`**.
2. **Parità Frozen / Runtime sul Lotto L3 (ID 738–787)**:
   - Confronto su tutti i campi (`domanda`, `rispostaCorretta`, `risposteErrate`, `spiegazione`, `materia`, `difficolta`): **`50 / 50 MATCH (0 discrepanze)`**.

---

## 5. Esito Test Suite e Collaudo

| Suite di Test | File / Comando | Esito | Dettaglio |
| :--- | :--- | :---: | :--- |
| **Unit Test Suite** | `npm test` | **PASS** | 328 test passati (240 `testQuiz.mjs`, 59 `testQuestionCatalog.mjs`, 29 `testNewTest1Integration.mjs`) |
| **Multi-User Integration** | `npm run test:integration` | **PASS** | 48/48 test passati |
| **Question Bank Audit** | `npm run audit:questions` | **PASS** | 0 duplicati certi, report JSON e MD generati |
| **Production Build** | `npm run build` | **PASS** | Bundle Vite compilato in 2.62s con 0 errori |
| **Check Integrazione L3** | `scratch/check-l3-integration.mjs` | **PASS** | 21/21 controlli superati |

---

## 6. Stato Repository

- **Modifiche effettuate**: Limitate esclusivamente ai 4 file di codice/test previsti e al presente documento.
- **Staging / Commit**: Nessun comando `git add`, `git commit`, `git tag`, `git push`, `deploy` è stato eseguito.
