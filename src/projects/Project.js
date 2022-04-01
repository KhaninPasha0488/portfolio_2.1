import React from 'react';
import s from './Project.module.css'

const Project = (props) => {
    return (
        <div>
            <div className={s.project}>
                <div className={s.icon}>
                    <button>view</button>
                </div>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.description}</span>

            </div>
        </div>
    );
};

export default Project;