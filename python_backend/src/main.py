from fastapi import FastAPI
from routers import users, sessions, images, moderators, session_request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()

app.include_router(sessions.router, prefix="/api/v2/sessions")
app.include_router(users.router, prefix="/api/v2/users")
app.include_router(images.router, prefix="/api/v2/images")
app.include_router(sessions.router, prefix="/api/v2/sessions")
app.include_router(session_request.router, prefix="/api/v2/session_request")

app.mount("/static", StaticFiles(directory="static/static"), name="static")

@app.get("/")
def index():
    with open("static/index.html") as f:
        response =  HTMLResponse(f.read())
    return response
@app.get("/asset-manifest.json")
def assets():
    with open("static/asset-manifest.json") as f:
        response =  HTMLResponse(f.read())
    return response
