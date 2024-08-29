from sqlalchemy import Column, Integer, String, Float
from app.database import Base

class FraudDetectionModel(Base):
    __tablename__ = "fraud_detection_models"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    accuracy = Column(Float)
