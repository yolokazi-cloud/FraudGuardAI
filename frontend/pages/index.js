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
    <div className="min-h-screen flex items-center justify-center">
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
