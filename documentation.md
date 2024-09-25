## **🪴STAGE 1:**

- Install Python version *3.10.0*

- Clone the directory

- Move to the directory location

- Create venv

```
python -m venv .venv
```

- Activate the venv

```
.venv\Scripts\activate
```
*Or just directly use python interpreter (Ctrl+Shift+p) in VS Code*

- Install Rasa

```
pip install rasa
```

*Version that I have used: rasa==3.6.20 (and rasaSDK==3.6.2)*

- Install Flask

```
pip install Flask
```
*Version that I have used: Flask==3.0.3 (and Werkzeug==3.0.4)*

&nbsp;

## **🤖Stage 2:**

Run the Rasa NLU Server
```
rasa run --enable-api --cors "*"
```

Run the Action Server
```
rasa run actions --cors "*"
```

Run the Flask app
```
flask run
```