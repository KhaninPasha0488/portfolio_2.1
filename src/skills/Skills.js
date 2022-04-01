import React from 'react';
import s from './Skills.module.css'
import sc from './../common/stules/Conteiner.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"jcsj scsjhcsj skcsjbv ,ncsljcn scsscns"}/>
                    <Skill title={"Redux"} description={"jcsj ghfhfhscsjhcsj skcsjbv ,n9999ljcn scsscns"}/>
                    <Skill title={"React"} description={"jcsj scsscsjbv ,ncn scns"}/>

                </div>

            </div>

        </div>
    );
};

export default Skills;