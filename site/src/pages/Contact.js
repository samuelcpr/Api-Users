import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './global.css';
import Menutop from '../components/menutop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form data submitted:', formData);
  };

  return (
    <div id='container'>
      <Menutop />
      <div style={{padding:'2% 0 2% 18%'}}>
        <h2 id='title'>Fale com a gente</h2>
      </div>
      <div id='barra-lateral'>
        <Sidebar />
      </div>
      <div id='conteudo' style={{padding:'0 20%'}}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Nome:
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Número de Telefone:
            <input
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Mensagem:
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
          <button type='submit' style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
