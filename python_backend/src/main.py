from fastapi import FastAPI
from routers import users, sessions, images, moderators, session_request


app = FastAPI()

app.include_router(sessions.router, prefix="/api/v2/sessions")
app.include_router(users.router, prefix="/api/v2/users")
app.include_router(images.router, prefix="/api/v2/images")
app.include_router(sessions.router, prefix="/api/v2/sessions")
app.include_router(session_request.router, prefix="/api/v2/session_request")