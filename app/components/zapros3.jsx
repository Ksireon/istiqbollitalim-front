import '../globals.scss'
import axios from 'axios'
import { useState } from "react";




export default function Zapros3() {

    
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
            const response = await axios.post('https://web-production-340a1.up.railway.app/tur', formData);
            setResponseMessage(response.data.message);
            setFormData({ firsName: '', number: '' });
        } catch (error) {
            setResponseMessage('Error submitting form');
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Имя" name="firsName"
                    value={formData.firsName} onChange={handleChange}
                    required type="text" />
                <input placeholder="Телефон" className="inp2"type="number"
                    name="number"
                    value={formData.number} onChange={handleChange}
                    required />
                <br />
                {/* <input placeholder="На какой урок вас записать?" className="inp3" type="text"
                    name="urok" value={formData.urok} onChange={handleChange} /> */}
                <br />
                <button type="submit">Записаться на собеседование</button>
            </form>
        </div>
    );
}
