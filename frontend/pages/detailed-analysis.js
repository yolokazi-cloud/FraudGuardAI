import React from 'react';
import { Card } from '@/components';

const DetailedAnalysis = () => {
  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold pb-5">Detailed Analysis</h2>

      <div className="grid grid-cols-2 gap-12">
        {/* Transaction Details Card */}
        <Card pagename="Transaction Details">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">Transaction Overview</h3>
            <p className="mb-4"><strong>Transaction ID:</strong> TXN001</p>
            <p className="mb-4"><strong>Date:</strong> 2024-09-01</p>
            <p className="mb-4"><strong>Amount:</strong> $1,250.00</p>
            <p className="mb-4"><strong>Status:</strong> Approved</p>
            <h3 className="text-xl font-semibold mb-3">Customer Details</h3>
            <p className="mb-4"><strong>Customer ID:</strong> CUST123</p>
            <p className="mb-4"><strong>Name:</strong> John Doe</p>
            <p className="mb-4"><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
        </Card>

        {/* Feature Contribution Card */}
        <Card pagename="Feature Contribution">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">Feature Importance</h3>
            <div className="mb-4">
              <p className="font-semibold">Feature A:</p>
              <p className="text-gray-700">Contribution to Prediction: 45%</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Feature B:</p>
              <p className="text-gray-700">Contribution to Prediction: 30%</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Feature C:</p>
              <p className="text-gray-700">Contribution to Prediction: 15%</p>
            </div>
            <div>
              <p className="font-semibold">Feature D:</p>
              <p className="text-gray-700">Contribution to Prediction: 10%</p>
            </div>
          </div>
        </Card>

        {/* Model Exploration Card */}
        <Card pagename="Model Exploration">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">Model Performance</h3>
            <p className="mb-4"><strong>Model Name:</strong> Model A</p>
            <p className="mb-4"><strong>Version:</strong> v1.0</p>
            <p className="mb-4"><strong>Accuracy:</strong> 92%</p>
            <p className="mb-4"><strong>Precision:</strong> 89%</p>
            <p className="mb-4"><strong>Recall:</strong> 91%</p>
            <p><strong>F1 Score:</strong> 90%</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Model Parameters</h3>
            <ul className="list-disc pl-5">
              <li><strong>Parameter A:</strong> 0.01</li>
              <li><strong>Parameter B:</strong> 0.5</li>
              <li><strong>Parameter C:</strong> 100</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DetailedAnalysis;
