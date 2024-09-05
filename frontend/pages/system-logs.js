import React from 'react'
import { Card } from '@/components'

const SystemLogs = () => {
  return (
    <div className="pl-5">
    <h2 className="text-4xl font-semibold">
      System Logs
    </h2>
    <div className="grid grid-cols-2">
      <Card pageName="Error Logs">

      </Card>
      <Card className="System Performance">

      </Card>
      </div>
  </div>
  )
}

export default SystemLogs;
