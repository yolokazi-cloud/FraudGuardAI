import React from 'react'
import { Card } from '@/components'

const Dashboard = () => {

  const modelPerformanceData = [
    { className: "Class 0", precision: "0.85", recall: "0.80", f1Score: "0.82", support: "100" },
    { className: "Class 1", precision: "0.78", recall: "0.85", f1Score: "0.81", support: "100" },
    { className: "Accuracy", precision: "0.82", recall: "-", f1Score: "-", support: "200" },
    { className: "Macro Avg", precision: "0.82", recall: "0.82", f1Score: "0.82", support: "200" },
    { className: "Weighted Avg", precision: "0.82", recall: "0.82", f1Score: "0.82", support: "200" }
  ];

  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold pb-5">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Two cards on the top */}
        <Card pagename="Model Performance">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b">
              <tr>
                <th>Class</th>
                <th>Precision</th>
                <th>F1-Score</th>
                <th>Support</th>
              </tr>
            </thead>
            <tbody>
              {modelPerformanceData.map((data, index) => (
                <tr key={index} className="border-b">
                  <td>{data.className}</td>
                  <td>{data.precision}</td>
                  <td>{data.recall}</td>
                  <td>{data.f1Score}</td>
                  <td>{data.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
