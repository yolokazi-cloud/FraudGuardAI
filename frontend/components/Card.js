import React from 'react'

const Card = ({ title, content }) => {
  return (
    <div className="nft-gray-3' rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold">{capitalizeNames(title)}</h2>
      <ul className="list-desc pl-5 space-y-2 text-black">
        {content.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

// Helper Functions
const capitalizeNames = (str) => {
    const words = str.toLowerCase().split('-');
    const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
    return capitalized.replace(/-/, ' ');
};

export default Card
