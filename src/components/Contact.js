import React, { useState } from 'react'

function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('formdata', formdata);
  };

  return (
    <section id='contact' className='py-20 bg-white text-gray-900'>
      <div className='container mx-auto'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10'>Contact Me</h2>
        <form onSubmit={handlesubmit} className='max-w-xl mx-auto space-y-6'>
          <div>
            <label className='block text-lg mb-2 ml-2'>Name</label>
            <input
              type='text'
              name='name'
              value={formdata.name}
              onChange={handlechange}
              className='w-full p-3 border border-gray-300 rounded-lg'
              required
            />
          </div>

          <div>
            <label className='block text-lg mb-2 ml-2'>Email</label>
            <input
              type='email'
              name='email'
              value={formdata.email}
              onChange={handlechange}
              className='w-full p-3 border border-gray-300 rounded-lg'
              required
            />
          </div>

          <div>
            <label className='block text-lg mb-2 ml-2'>Message</label>
            <textarea
              name='message'
              value={formdata.message}
              onChange={handlechange}
              className='w-full p-3 border border-gray-300 rounded-lg'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full p-3 bg-blue-500 text-white hover:bg-blue-400 rounded-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
