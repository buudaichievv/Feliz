import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { db } from "./firebasemain";
export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");


    const [loader, setLoader] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            phone: phone,

        })
            .then(() => {
                alert('Мы приняли ваш сообщении, в течении несколько минут,к вам обращаемся!')
                setLoader(false)
            })
            .catch((error) => {
                alert(error.message)
                setLoader(false)
            })
        setName('')
        setEmail('')
        setMessage('')
        setPhone('')
    };

    return (

        <div className='contact_body'>
            <h1>Contact Us</h1>
            <div className='contact'>
                <div className='contact_map'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1593782089944!2d74.60167641533947!3d42.869480079156055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d00eb329ed%3A0xa14762ee4b6e648f!2z0J7QniBJbm5vdmF0aXZlIFNvbHV0aW9uIEluYy4sIDMyINGD0LsuINCg0LDQt9C30LDQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDA0MA!5e0!3m2!1sru!2skg!4v1613795452389!5m2!1sru!2skg" width="140%" height="400" allowfullscreen="" loading="lazy" className='maps'></iframe>
                </div>
                <div className='contact-text'>
                    <Form className='form_text' onSubmit={handleSubmit}>

                        <label>Вводите ФИО</label>
                        <input className='input' type="text" placeholder="Введите ФИО" value={name}
                            onChange={(e) => setName(e.target.value)} />


                        <label>Email address</label>
                        <input className='input' size="lg" type="text" placeholder="Введите email адрес"
                            value={email} onChange={(e) => setEmail(e.target.value)} />



                        <label>Введите тел номер</label>
                        <input className='input' size="lg" type="tel" placeholder="Введите тел номер"
                            value={phone} onChange={(e) => setPhone(e.target.value)} />


                        <label>Собщениее</label>
                        <textarea rows="40" className='input_textarea' id='textarea' placeholder="Собщении" value={message}
                            onChange={(e) => setMessage(e.target.value)} /><br />

                        <button>Отправить</button>
                    </Form>
                </div>
            </div>

        </div>
    )
}
