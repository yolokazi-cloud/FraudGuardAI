import React from 'react';
import { Card } from '@/components';

const ModelManagement = () => {
  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold pb-5">Model Management</h2>
      <div className="grid grid-cols-2 gap-12">
        {/* Model Details Card */}
        <Card pagename="Model Details">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">Model Overview</h3>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Model Name:</strong> Model A</li>
              <li><strong>Version:</strong> v1.0</li>
              <li><strong>Description:</strong> This model predicts X with high accuracy.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Accuracy:</strong> 92%</li>
              <li><strong>Precision:</strong> 89%</li>
              <li><strong>Recall:</strong> 91%</li>
              <li><strong>F1 Score:</strong> 90%</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Training Data Info</h3>
            <ul className="list-disc pl-5">
              <li><strong>Dataset Size:</strong> 50,000 samples</li>
              <li><strong>Data Characteristics:</strong> Balanced classes, pre-processed</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Status</h3>
            <p className="text-green-500">Active</p>
          </div>
        </Card>

        {/* Upload New Model Card */}
        <Card pagename="Upload New Model">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">Upload Model</h3>
            <div className="border border-dashed border-gray-300 p-4 rounded-lg mb-4">
              <p className="text-center text-gray-500 mb-4">Drag and drop your model file here or click to upload.</p>
              <input type="file" className="w-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Model Metadata</h3>
            <div className="mb-4">
              <label className="block mb-1">Model Name:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter model name" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Version:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter version" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Description:</label>
              <textarea className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Enter description" rows="3"></textarea>
            </div>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Upload
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Retrain Existing Model
              </button>
            </div>
          </div>
        </Card>

        {/* Model Actions Card */}
        <Card pagename="Model Actions">
          <div className="p-4">
            <ul className="list-none">
              <li className="mb-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Deploy</button>
              </li>
              <li className="mb-3">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Archive</button>
              </li>
              <li className="mb-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Evaluate</button>
              </li>
              <li>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ModelManagement;
