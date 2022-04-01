import React from 'react';
import s from './Main.module.css'
import sc from './../common/stules/Conteiner.module.css'
const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Pavel Khanin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>


        </div>
    );
};

export default Main;