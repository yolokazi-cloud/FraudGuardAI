# Configuration settings
import os
from dotenv import load_dotenv

load_dotenv

class Settings:
    PROJECT_NAME: str = "FraudGuardAI"
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY")

settings = Settings()