import React from 'react';
import s from './Contact.module.css'
const Contact = () => {
    return (
        <div className={s.form}>
        <form>
            <input type="text" className={s.inputForm}/>
            <input type="text" className={s.inputForm}/>
            <textarea className={s.inputForm}/>
        </form>
            <button className={s.butt}>send</button>
        </div>
    );
};

export default Contact;