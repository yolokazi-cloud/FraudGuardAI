// pages/index.js
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <section id="content">
        <div className="content-wrap">
          <div className="heading-block text-center mt-6 mx-auto border-bottom-0" style={{ maxWidth: '700px' }}>
            <h2>Fraud Guard AI Services</h2>
            <p>
              Effectively monitor and analyze transaction patterns to identify and prevent fraudulent activities.
              Consistently leverage advanced algorithms to ensure secure, compliant, and reliable financial operations.
            </p>
          </div>
          {/* Add other sections here */}
        </div>
      </section>
      <Footer />
    </>
  );
}
