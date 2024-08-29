# Initialize API router
from fastapi import APIRouter
from app.api.v1 import models


router = APIRouter()
router.include_router(models.router, prefix="/models", tags=["models"])