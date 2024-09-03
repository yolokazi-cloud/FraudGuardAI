<<<<<<< HEAD
import Card from "../components/Card";
import Link from 'next/link';

const getPageUrl = (pageName) => {
  switch(pageName) {
    case 'dashboard':
      return '/dashboard';
    case 'real-time-alerts':
      return '/real-time-alerts'
    case 'detailed-analysis':
      return '/detailed-analysis'
    case 'data-visualization':
      return '/data-visualization'
    case 'system-logs':
      return '/system-logs';
    case 'model-management':
      return '/model-management'
    default:
      return '/';
  }
}

export default function Home() {
  const cardContents = {
    "dashboard": ["Key Metrics", "Fraud Summary", "Model Performance"],
    "real-time-alerts": ["Transaction ID", "Alert Level", "Fraud Probability"],
    "detailed-analysis": ["Transaction Details", "Feature Contribution"],
    "data-visualization": ["Fraud Trends", "Model Accuracy Over Time"],
    "system-logs": ["Error Logs", "System Performance"],
    "model-management": ["Upload New Model", "Retrain Model"] 
  }
  return (
    <div className=" min-h-screen flex items-center justify-center bg-home-color">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-base">
      {Object.entries(cardContents).map(([title, content], index) => (
        <Link key={index} href={getPageUrl(title)}>
          <Card
            key={index}
            title={title}
            content={content}
          />
        </Link>
      ))}
     </div>
    </div>
  );
}
=======
<<<<<<< HEAD
// Import the CSS file correctly
import './styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
          <span className={styles.navText}>Home</span>
        </li>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faUser} className={styles.navIcon} />
          <span className={styles.navText}>Profile</span>
        </li>
        <li className={styles.navItem}>
          <FontAwesomeIcon icon={faCog} className={styles.navIcon} />
          <span className={styles.navText}>Settings</span>
        </li>
        <li className={`${styles.navItem} ${styles.userInfo}`}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.navIcon} />
          <span className={styles.navText}>Logged in as {userName}</span>
        </li>
      </ul>
    </header>

      {/* Models Section */}
      <section className="models-section">
        <h2>Our AI Models</h2>
        <div className="models-list">
          <ModelCard
            title="Synthetic Fraud Generator"
            description="Generates realistic synthetic fraud scenarios to train detection models. Continuously updates scenarios based on emerging fraud patterns."
            keyMetrics={[
              "Realistic fraud scenario generation",
              "Dynamic updating based on new patterns",
            ]}
          />
          <ModelCard
            title="Adaptive Detection Model"
            description="Utilizes machine learning to adapt to new fraud tactics. Provides high accuracy in detecting fraudulent activities."
            keyMetrics={[
              "Adaptive to new tactics",
              "High detection accuracy",
            ]}
          />
          <ModelCard
            title="Real-time Analysis Engine"
            description="Analyzes transactions in real-time for potential fraud. Generates immediate alerts for suspicious activities."
            keyMetrics={[
              "Real-time transaction analysis",
              "Immediate alerts for fraud",
            ]}
          />
          <ModelCard
            title="Explainable AI Module"
            description="Provides clear explanations for detection decisions. Enhances transparency and trust in the detection system."
            keyMetrics={[
              "Clear detection explanations",
              "Transparency in AI decisions",
            ]}
          />
          <ModelCard
            title="Feedback Loop"
            description="Integrates user feedback to improve model performance. Ensures continuous improvement of fraud detection capabilities."
            keyMetrics={[
              "User feedback integration",
              "Continuous improvement",
            ]}
          />
        </div>
      </section>

      {/* Performance Summary Section */}
      <section className="performance-summary">
        <h2>Model Performance Summary</h2>
        <div className="progress-bars">
          <ProgressBar title="Synthetic Fraud Generator" progress={80} />
          <ProgressBar title="Adaptive Detection Model" progress={90} />
          <ProgressBar title="Real-time Analysis Engine" progress={85} />
          <ProgressBar title="Explainable AI Module" progress={70} />
          <ProgressBar title="Feedback Loop" progress={75} />
        </div>
      </section>
    </div>
  );
}

// Model Card Component
function ModelCard({ title, description, keyMetrics }) {
  return (
    <div className="model-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {keyMetrics.map((metric, index) => (
          <li key={index}>{metric}</li>
        ))}
      </ul>
    </div>
  );
}

// Progress Bar Component
function ProgressBar({ title, progress }) {
  return (
    <div className="progress-bar">
      <div className="label">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className="bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
=======
const Home = () => (
  
);
>>>>>>> e64cadf23d4df8307de47de42f2eeb1b72802f75
>>>>>>> ad2afac3a0a5e063540839f0f379f38f5474e478
