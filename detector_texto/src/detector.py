"""Módulo simple de ejemplo para detección de palabras clave en texto.

Este archivo ofrece funciones básicas que pueden usarse como punto de partida
para integrar modelos más avanzados o microservicios.
"""
from typing import List, Dict


def detect_keywords(text: str, keywords: List[str]) -> Dict[str, int]:
    """Cuenta ocurrencias de cada keyword en el texto (case-insensitive).

    Retorna un diccionario {keyword: count} solo para keywords encontradas.
    """
    text_lower = text.lower()
    result = {}
    for k in keywords:
        count = text_lower.count(k.lower())
        if count:
            result[k] = count
    return result


def classify_text(text: str, keywords_alert: List[str]) -> str:
    """Clasifica el texto en 'alert' si aparecen keywords_alert, 'ok' en otro caso."""
    found = detect_keywords(text, keywords_alert)
    return "alert" if found else "ok"


if __name__ == "__main__":
    sample = "Transacción con posible fraude y riesgo de crédito"
    kws = ["fraude", "riesgo", "alerta"]
    print("Detected:", detect_keywords(sample, kws))
    print("Classify:", classify_text(sample, kws))
