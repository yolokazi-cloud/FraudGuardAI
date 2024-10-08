import React from 'react'

const Card = ({ pagename, children, className = '', ...props }) => {
  return (
    <div className={`bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300`} {...props}>
      <h2 className="text-xl font-semibold mb-4">{pagename}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card;
