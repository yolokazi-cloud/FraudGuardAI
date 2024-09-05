import { useState } from 'react';
import { Card } from '@/components' // Assuming Card is in the same directory

export default function RealTimeAlerts() {
  const [searchTerm, setSearchTerm] = useState('');

  const dummyData = [
    { transactionId: 'TXN001', alertLevel: 'High', fraudProbability: '85%' },
    { transactionId: 'TXN002', alertLevel: 'Medium', fraudProbability: '60%' },
    { transactionId: 'TXN003', alertLevel: 'Low', fraudProbability: '30%' },
    { transactionId: 'TXN004', alertLevel: 'High', fraudProbability: '92%' },
    { transactionId: 'TXN005', alertLevel: 'Medium', fraudProbability: '58%' },
    { transactionId: 'TXN006', alertLevel: 'Low', fraudProbability: '25%' },
    { transactionId: 'TXN007', alertLevel: 'High', fraudProbability: '89%' },
    { transactionId: 'TXN008', alertLevel: 'Medium', fraudProbability: '65%' },
    { transactionId: 'TXN009', alertLevel: 'Low', fraudProbability: '35%' },
    { transactionId: 'TXN010', alertLevel: 'High', fraudProbability: '95%' },
    { transactionId: 'TXN011', alertLevel: 'Medium', fraudProbability: '55%' },
    { transactionId: 'TXN012', alertLevel: 'Low', fraudProbability: '20%' },
    { transactionId: 'TXN013', alertLevel: 'High', fraudProbability: '80%' },
    { transactionId: 'TXN014', alertLevel: 'Medium', fraudProbability: '68%' },
    { transactionId: 'TXN015', alertLevel: 'Low', fraudProbability: '40%' },
  ];

  const filteredData = dummyData.filter((transaction) =>
    transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pl-5">
      <h2 className="text-4xl font-semibold pb-5">
        Real Time Alerts
      </h2>
    <div className="grid grid-cols-2 gap-6 ml-08">

      <div className="col-span-2 ">
        <Card pagename="Search Transaction">
          <div className="">
            <div className="mt-4">
              <div className="flex">
                <input
                  type="text"
                  className="border border-gray-300 rounded-l-lg p-2 w-full"
                  placeholder="Search Customer Transaction ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="">
        <Card pagename="Transaction Data" className="mt-5">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b-2 border-gray-300 text-left">Transaction ID</th>
                <th className="py-3 px-4 border-b-2 border-gray-300 text-left">Alert Level</th>
                <th className="py-3 px-4 border-b-2 border-gray-300 text-left">Fraud Probability</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-300">{transaction.transactionId}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{transaction.alertLevel}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{transaction.fraudProbability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card> 
      </div>
    
    </div>
  </div>
  );
}


{/* 

      {/* Transaction Table wrapped in a Card */}
    