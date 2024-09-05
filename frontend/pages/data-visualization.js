import React from 'react'
import { Card } from '@/components'

const DataVisualization = () => {
  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold">
        Data Visualization
      </h2>
      <div className="grid grid-cols-2">
        <Card pageName="Fraud Trends">

        </Card>
        <Card className="Model Accuracy Over Time">

        </Card>
        <Card pagename="Feature Importance">
    
        </Card>
      </div>
    </div>
  )
}

export default DataVisualization;
