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
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/otkritiyUrok`, formData);
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
                <input placeholder="На какой урок вас записать?" required className="inp3" type="text"
                    name="urok" value={formData.urok} onChange={handleChange} />
                <br />
                <button type="submit">Записаться на открытый урок</button>
            </form>
        </div>
    );
}
