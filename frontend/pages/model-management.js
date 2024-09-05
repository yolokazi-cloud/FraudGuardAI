import React from 'react'
import { Card } from '@/components'

const ModelManagement = () => {
  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold pb-5">Dashboard</h2>
      <div className="grid grid-cols-2 gap-12">
        {/* Two cards on the top */}
        <Card pagename="Model Details">
        
        </Card>

        <Card pagename="Upload new model">
          
        </Card>
        
        <Card pagename="Model Actions">
          <ul className="list-none">
            <li>Deploy</li>
            <li>Archive</li>
            <li>Evaluate</li>
            <li>Delete</li>
          </ul>
        </Card>
    
      </div>
    </div>
  )
}

export default ModelManagement;
