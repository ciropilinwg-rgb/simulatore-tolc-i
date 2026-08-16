from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import pandas as pd


WRONG_ANSWER_PREFIX = "Risposta sbagliata"
DEFAULT_SHEET_NAME = "Domande"


def normalize_text(value: object) -> str:
    if pd.isna(value):
        return ""

    text = str(value).replace("\u00a0", " ")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def build_question_bank(source_path: Path, sheet_name: str) -> list[dict[str, object]]:
    frame = pd.read_excel(source_path, sheet_name=sheet_name)
    wrong_columns = [column for column in frame.columns if str(column).startswith(WRONG_ANSWER_PREFIX)]

    seen_ids: set[int] = set()
    questions: list[dict[str, object]] = []

    for _, row in frame.iterrows():
        question_id = int(row["Numero progressivo"])
        if question_id in seen_ids:
            raise ValueError(f"ID domanda duplicato: {question_id}")
        seen_ids.add(question_id)

        wrong_answers = [
            normalize_text(row[column])
            for column in wrong_columns
            if normalize_text(row[column])
        ]

        if not wrong_answers:
            raise ValueError(f"La domanda {question_id} non ha risposte errate.")

        question = {
            "id": question_id,
            "materia": normalize_text(row["Materia"]),
            "domanda": normalize_text(row["Domanda"]),
            "rispostaCorretta": normalize_text(row["Risposta esatta"]),
            "risposteErrate": wrong_answers,
            "spiegazione": "",
            "fonte": normalize_text(row["Fonte della domanda"]),
            "numeroVolteProposta": 0,
            "numeroRisposteCorrette": 0,
            "numeroRisposteErrate": 0,
        }

        questions.append(question)

    return questions


def write_question_bank(output_path: Path, questions: list[dict[str, object]], source_name: str) -> None:
    payload = json.dumps(questions, ensure_ascii=False, indent=2)
    contents = (
        "// Banca dati TOLC-I — generata dal file Excel sorgente\n"
        f"// Fonte importazione: {source_name}\n"
        "// Ogni domanda include i contatori statistici richiesti dal simulatore.\n\n"
        f"const questionBank = {payload};\n\n"
        "export default questionBank;\n"
    )
    output_path.write_text(contents, encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Genera src/data/questionBank.js a partire dal file Excel TOLC-I."
    )
    parser.add_argument("source", type=Path, help="Percorso del file .xlsx sorgente")
    parser.add_argument("output", type=Path, help="Percorso del file .js di output")
    parser.add_argument(
        "--sheet",
        default=DEFAULT_SHEET_NAME,
        help=f"Nome del foglio Excel da leggere (default: {DEFAULT_SHEET_NAME})",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    questions = build_question_bank(args.source, args.sheet)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    write_question_bank(args.output, questions, args.source.name)
    print(f"Generate {len(questions)} domande in {args.output}")


if __name__ == "__main__":
    main()
