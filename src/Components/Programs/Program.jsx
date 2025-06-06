// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Program.css';
import program1 from '../../assets/program-1.jpeg';
import program2 from '../../assets/program-2.jpeg';
import program5 from '../../assets/program-5.jpeg';
import program1_icon from '../../assets/certificate.png';
import program2_icon from '../../assets/course.png';
import program3_icon from '../../assets/skill.png';


function Program() {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program1} alt="Program 1" />
                <div className="caption">
                    <img src={program1_icon} alt="" />
                    <p>Courses</p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="Program 2" />
                <div className="caption">
                    <img src={program2_icon} alt="" />
                    <p>Courses</p>
                </div>
            </div>
            
            <div className="program">
                <img src={program5} alt="Program 5" />
                <div className="caption">
                    <img src={program3_icon} alt="" />
                    <p>Courses</p>
                </div>
            </div>
        </div>
    );
}

export default Program;
