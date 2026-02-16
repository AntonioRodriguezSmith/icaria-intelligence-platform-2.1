import os
import sys

# Ajustar path para importar módulo local (ejecutar tests desde la raíz del módulo)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src')))

from detector import detect_keywords, classify_text


def test_detect_keywords():
    text = "Hola, hay riesgo y posible fraude en la transacción. Riesgo detectado."
    kws = ["riesgo", "fraude", "noexiste"]
    res = detect_keywords(text, kws)
    assert res.get("riesgo", 0) == 2
    assert res.get("fraude", 0) == 1
    assert "noexiste" not in res


def test_classify_text():
    assert classify_text("Este mensaje indica fraude inmediato", ["fraude"]) == "alert"
    assert classify_text("Mensaje normal", ["fraude"]) == "ok"
