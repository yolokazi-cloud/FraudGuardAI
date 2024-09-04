import { useState } from 'react';

export default function TransactionTable() {
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
    <div>
      {/* Header Section */}
      <section className="section-domain" style={{ background: '#F5F5F5', padding: '20px' }}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5">
              <h3>Search Transaction</h3>
            </div>
            <div className="col-md-6 mt-4">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Customer TransactionID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn bg-color text-white" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Table */}
      <div className="container mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Alert Level</th>
              <th>Fraud Probability</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.alertLevel}</td>
                <td>{transaction.fraudProbability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to top button */}
      <div id="gotoTop" className="uil uil-angle-up" style={{ cursor: 'pointer', position: 'fixed', bottom: '20px', right: '20px' }}>
        <a href="#">Go To Top</a>
      </div>
    </div>
  );
}
