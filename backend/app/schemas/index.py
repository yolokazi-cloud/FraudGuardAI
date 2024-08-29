# Pydantic models for request validation and response formatting
from pydantic import BaseModel

class ModelInput(BaseModel):
    feature1: float
    feature2: float

class ModelOutput(BaseModel):
    prediction: str