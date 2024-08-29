# API routes for ML models
from fastapi import APIRouter, HTTPException
from app.services.model_service import predict_model
from app.schemas import ModelInput, ModelOutput

router = APIRouter()

@router.post("/predict", response_model=ModelInput)
async def predict(input_data: ModelInput):
    try:
        prediction = predict_model(input_data)
        return {"prediction": prediction}
    except Exception as e:
        HTTPException(status_code=500, detail=str(e))