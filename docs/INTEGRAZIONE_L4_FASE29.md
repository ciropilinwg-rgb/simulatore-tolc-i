# Documento di Integrazione e Collaudo — Lotto L4 (FASE 29)

## 1. Dati Generali e Baseline

- **Repository**: `C:\Users\Ciro\Documents\Codex\2026-08-15\sto\work\SimulatoreConcorso\SimulatoreConcorso`
- **Baseline Git consolidata**: `a0f722d48f574b5b1a034852ba645c728236d6ff` (*"Integra lotto L3 e aggiorna test"*)
- **Dataset Frozen integrato**: `scratch/L4-52-quesiti.json`
- **Dimensione file frozen**: `46.035 byte`
- **SHA-256 frozen**: `e7617c45cb016d37212430dae77e6e6f87bc91ac557ed8dd76d978f1eea7f4d1`

---

## 2. Dati del Lotto L4

- **Materia**: Logica (52/52)
- **Range ID**: `788` $\to$ `839` (52 quesiti consecutivi e strettamente univoci)
- **Stato TOLC-I**: 52/52 attivi (`excludedFromTolcPool !== true`)
- **Distribuzione difficoltà**: `4 Medio-Facili (MF) + 44 Medi (M) + 4 Medio-Difficili (MD) = 52`
  - **Medio-Facili (4)**: `L4-01` (ID 788), `L4-14` (ID 801), `L4-27` (ID 814), `L4-40` (ID 827)
  - **Medio-Difficili (4)**: `L4-13` (ID 800), `L4-26` (ID 813), `L4-39` (ID 826), `L4-52` (ID 839)
  - **Medi (44)**: restanti 44 quesiti del lotto
- **Correzione specifica su L4-39 (ID 826)**:
  - Sostituito il vecchio distrattore $\frac{6}{15}$ (equivalente a $\frac{2}{5}$) con il distrattore canonico $\frac{4}{7}$.
  - Audit di equivalenza opzioni: 520/520 coppie controllate nel runtime con **0 equivalenze residue**.

---

## 3. Conteggi della Banca Dati Prima e Dopo l'Integrazione

| Parametro | Pre-Integrazione (L3) | Post-Integrazione (L4) | Variazione |
| :--- | :---: | :---: | :---: |
| **Record Fisici Totali** | `782` | `834` | `+52` |
| **Record Attivi TOLC-I** | `747` | `799` | `+52` |
| **Record Legacy Esclusi** | `35` | `35` | `0` |
| **ID Massimo** | `787` | `839` | `+52` |
| **Equazione di Bilancio** | $747 + 35 = 782$ | $799 + 35 = 834$ | **Verificata** |

### Ripartizione per Materia

| Materia | Fisici Pre | Fisici Post | Attivi Pre | Attivi Post | Legacy | Obiettivo Attivi |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Matematica** | 251 | 251 | 250 | 250 | 1 | 250 (Raggiunto) |
| **Logica** | 199 | **251** | 198 | **250** | 1 | **250 (RAGGIUNTO)** |
| **Scienze** | 252 | 252 | 250 | 250 | 2 | 250 (Raggiunto) |
| **Comprensione verbale** | 80 | 80 | 49 | 49 | 31 | 49 (Raggiunto) |
| **TOTALE** | **782** | **834** | **747** | **799** | **35** | **799** |

### Gap Storici Preservati
I gap storici `2`, `18`, `25`, `78`, `202` risultano **tutti assenti** come prescritto.

---

## 4. Invarianza dei 782 Record Preesistenti e Parità Frozen/Runtime

1. **Invarianza dei 782 record preesistenti (ID $\le$ 787)**:
   - Confronto integrale contro lo snapshot baseline: **`782 / 782 MATCH (100% invariati)`**.
2. **Parità Frozen / Runtime sul Lotto L4 (ID 788–839)**:
   - Confronto su tutti i campi (`domanda`, `rispostaCorretta`, `risposteErrate`, `spiegazione`, `materia`, `difficolta`): **`52 / 52 MATCH (0 discrepanze)`**.
3. **Audit Equivalenze Opzioni Runtime L4**:
   - 520 coppie controllate con normalizzazione razionale/simbolica: **0 equivalenze**.

---

## 5. Esito Test Suite e Collaudo

| Suite di Test | File / Comando | Esito | Dettaglio |
| :--- | :--- | :---: | :--- |
| **Unit Test Suite** | `npm test` | **PASS** | 343 test passati (255 `testQuiz.mjs`, 59 `testQuestionCatalog.mjs`, 29 `testNewTest1Integration.mjs`) |
| **Multi-User Integration** | `npm run test:integration` | **PASS** | 48/48 test passati |
| **Question Bank Audit** | `npm run audit:questions` | **PASS** | 0 duplicati certi, report JSON e MD generati |
| **Production Build** | `npm run build` | **PASS** | Bundle Vite compilato in 2.67s con 0 errori |
| **Check Integrazione L4** | `scratch/check-l4-integration.mjs` | **PASS** | 23/23 controlli superati |

---

## 6. Stato Repository

- **Modifiche effettuate**: Limitate esclusivamente ai 4 file di codice/test previsti e al presente documento.
- **Staging / Commit**: Nessun comando `git add`, `git commit`, `git tag`, `git push`, `deploy` è stato eseguito.
