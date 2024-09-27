import React from 'react'
function Project() {
  return (
    <div>
      <section id='project' className='bg-gray-100 text-gray-900 py-20'>
        <div className='container mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10'>Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4' >Project One</h2>
              <p className='text-gray-600'>Weather App built with React and CSS</p>
              <a href='https://github.com/iMuhammadBilalDev/react-weather-app' className='text-blue-500 mt-4 inline-block'>View Details </a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4' >Project Two</h2>
              <p className='text-gray-600'>Todo App built with React and  CSS</p>
              <a href='https://github.com/iMuhammadBilalDev/todo-app' className='text-blue-500 mt-4 inline-block'>View Details </a>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4' >Project Three</h2>
              <p className='text-gray-600'> e-commerce-website built with React and Tailwind CSS</p>
              <a href='https://github.com/iMuhammadBilalDev/e-commerce-website' className='text-blue-500 mt-4 inline-block'>View Details </a>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;