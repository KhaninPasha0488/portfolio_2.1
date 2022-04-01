import React from 'react';
import s from './Projects.module.css'
import Project from "./Project";


const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social network"} description={"jcsj scsjhcsj skcsjbv ,ncsljcn scsscns"}/>
                    <Project title={"TODOLIST"} description={"jcsj ghfhsj skcsjbv ,n9999ljcn "}/>


                </div>

            </div>

        </div>
    );
};

export default Projects;