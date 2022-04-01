import React from 'react';
import s from "./Contacts.module.css";
import Contact from "./Contact";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.contacts}>
                    <Contact />

                </div>

            </div>

        </div>
    );
};

export default Contacts;