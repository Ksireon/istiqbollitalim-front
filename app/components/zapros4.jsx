import '../globals.scss'
import axios from 'axios'
import { useState } from "react";




export default function Zapros4() {

  const [formData, setFormData] = useState({
    firsName: '',
    review: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7777/review', formData);
      setResponseMessage(response.data.message);
      setFormData({ firsName: '', review: '' });
    } catch (error) {
      setResponseMessage('Error submitting form');
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input placeholder="Имя" type="text"
          name="firsName"
          value={formData.firsName} onChange={handleChange}
          required />
            <br />
            <input placeholder="Отзыв" className="inp3" type="text"
          name="review"
          value={formData.review} onChange={handleChange}
          required />
            <br />
            <button type="submit">Оставить отзыв</button>
          </form>

    </div>
  );
}
