import React from 'react'
import { Card } from '@/components'
import { values } from 'lodash';


const Dashboard = () => {

  const modelPerformanceData = [
    { className: "Class 0", precision: "0.85", recall: "0.80", f1Score: "0.82", support: "100" },
    { className: "Class 1", precision: "0.78", recall: "0.85", f1Score: "0.81", support: "100" },
    { className: "Accuracy", precision: "0.82", recall: "-", f1Score: "-", support: "200" },
    { className: "Macro Avg", precision: "0.82", recall: "0.82", f1Score: "0.82", support: "200" },
    { className: "Weighted Avg", precision: "0.82", recall: "0.82", f1Score: "0.82", support: "200" }
  ];

  const fraudSummaryData = [
    { name: "Defrauded amount", value: "$41,590.57" },
    { name: "Fraudulent transactions", value: "2,654" },
    { name: "Fraudulent transactions", value: "2,654" },
    { name: "Fraudulent customers", value: "2,654" }
  ]

  const matrixData = {
    truePositive: 80,
    falsePositive: 15,
    trueNegative: 85,
    falseNegative: 20
  };
    
  
  return (
    <div className="pl-5">
      <h2 className="font-poppins text-4xl font-semibold pb-5">Dashboard</h2>
      <div className="grid grid-cols-2 gap-12">
        {/* Two cards on the top */}
        <Card pagename="Model Performance">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b">
              <tr>
                <th className='font-poppins'>Class</th>
                <th className='font-poppins'>Precision</th>
                <th className='font-poppins'>F1-Score</th>
                <th className='font-poppins'>Support</th>
              </tr>
            </thead>
            <tbody>
              {modelPerformanceData.map((data, index) => (
                <tr key={index} className="border-b">
                  <td className='font-poppins'>{data.className}</td>
                  <td className='font-poppins'>{data.precision}</td>
                  <td className='font-poppins'>{data.recall}</td>
                  <td className='font-poppins'>{data.f1Score}</td>
                  <td className='font-poppins'>{data.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card pagename="Fraud Summary">
          <ul className="grid grid-cols-2 gap-4">
              {fraudSummaryData.map((item, index) => (
                <div key={index} className="flex justify-between p-2 border-b ">
                  <span className="font-poppins font-semibold pr-3">{`${item.name}: `}</span>
                  <span className='font-poppins'>{item.value}</span>
                </div>
              ))}
          </ul>
        </Card>
        
        <div className="col-span-2">
          <Card pagename="Key Metrics">
            <div className=" w-full grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center p-4 border-b border-gray-300">
                <span className="font-poppins mt-2 font-semibold">{matrixData.trueNegative}</span>
                <span className="font-poppins text-sm text-gray-500">True Negative</span>
              </div>
              <div className="flex flex-col items-center p-4 border-b border-gray-300">
                <span className="font-poppins mt-2 font-semibold">{matrixData.falseNegative}</span>
                <span className="font-poppins text-sm text-gray-500">False Negative</span>
              </div>
              <div className="flex flex-col items-center p-4 border-b border-gray-300">
                <span className="font-poppins mt-2 font-semibold">{matrixData.falsePositive}</span>
                <span className="font-poppins text-sm text-gray-500">False Positive</span>
              </div>
              <div className="flex flex-col items-center p-4 border-b border-gray-300">
                <span className="font-poppins mt-2 font-semibold">{matrixData.truePositive}</span>
                <span className="font-poppins Stext-sm text-gray-500">True Positive</span>
              </div>
            </div>
          </Card>
        </div>
      
      </div>
    </div>
  )
}

export default Dashboard
