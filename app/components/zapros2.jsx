import '../globals.scss'
import axios from 'axios'
import { useState } from "react";




export default function Zapros2() {

    const [formData, setFormData] = useState({
        firsName: '',
        number: '',
        urok: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://web-production-340a1.up.railway.app/otkritiyUrok', formData);
            setResponseMessage(response.data.message);
            setFormData({ firsName: '', number: '', urok: '' });
        } catch (error) {
            setResponseMessage('Error submitting form');
        }
    };


    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input placeholder="Имя" type="text"
                    name="firsName" value={formData.firsName} required onChange={handleChange} />
                <input placeholder="Телефон" className="inp2" type="number"
                    name="number"
                    value={formData.number} required onChange={handleChange} />
                <br />
                <input placeholder="Сколько лет вашему ребёнку?" required className="inp3" type="text"
                    name="urok" value={formData.urok} onChange={handleChange} />
                <br />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}
