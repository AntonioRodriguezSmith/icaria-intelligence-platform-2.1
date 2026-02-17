from flask import Flask, Response, jsonify
import time
import threading

app = Flask(__name__)

@app.route('/health')
def health():
    return jsonify({'status': 'ok'}), 200

@app.route('/sse')
def sse():
    def event_stream():
        i = 0
        while True:
            i += 1
            yield f"data: {{\"event\": \"tick\", \"count\": {i}}}\n\n"
            time.sleep(2)
    return Response(event_stream(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
