import React, { Component } from 'react';
import Project from './project';
import data from '../data';

class Work extends Component {
    state = {}
    render() {
        return (
            <div className='work-content'>
                {data.projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        service={project.service}
                        imageSrc={project.imageSrc}
                        url={project.url}
                    ></Project>
                ))}
            </div>
        );
    }
}

export default Work;