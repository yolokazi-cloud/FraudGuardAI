# Application Entry point
from fastapi import FastAPI
from app.api import api_router
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

@app.get("/")
def read_root():
    return { "message": "Welcome to FraudGuardAI" }

app.include_router(api_router)