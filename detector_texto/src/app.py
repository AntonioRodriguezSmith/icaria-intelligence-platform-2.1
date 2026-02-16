from flask import Flask, request, jsonify
from detector import detect_keywords, classify_text

app = Flask(__name__)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200


@app.route('/detect', methods=['POST'])
def detect():
    data = request.get_json() or {}
    text = data.get('text', '')
    keywords = data.get('keywords', [])
    alert_keywords = data.get('alert_keywords', [])

    if not text:
        return jsonify({'error': 'text is required'}), 400

    found = detect_keywords(text, keywords or alert_keywords)
    classification = classify_text(text, alert_keywords)

    return jsonify({'found': found, 'classification': classification})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9100)
