import '../globals.scss'
import axios from 'axios'
import { useState } from "react";




export default function Zapros1() {

  const [formData, setFormData] = useState({
    firsName: '',
    number: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://istiqbollitalim-app-1f6ea5e54343.herokuapp.com/openlessons', formData);
      setResponseMessage(response.data.message);
      console.log('Form reset:', formData); // Для проверки
      setFormData({ firsName: '', number: '' });
    } catch (error) {
      setResponseMessage('Error submitting form');
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Записаться <br /> на открытый урок</h1>
        <input
          type="text"
          name="firsName"
          value={formData.firsName} onChange={handleChange}
          required placeholder="Имя" /> <br />
        <input
          type="number"
          name="number"
          value={formData.number} onChange={handleChange}
          required placeholder="Телефон" /> <br />
        <button type="submit"> Записаться </button>
      </form>
    </div>
  );
}
