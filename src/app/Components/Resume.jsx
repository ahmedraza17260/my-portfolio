"use client";
import React from "react";

const Resume = ({ data }) => {
  if (!data) return null;

  return (
    <section id="resume">
      {/* Education Section - FIXED STRUCTURE */}
      <div className="row ">
        <div className="three columns header-col">
          <h1><span></span></h1>
        </div>
        <div style={{ marginBottom: "20px" }} className="nine columns main-col">
          <h1><span>Education</span></h1>

          {data.education.map((edu) => (
            <div key={edu.school} className="row item">
              <div className="twelve columns">
                <h3>Matriculation:</h3>
                <h4>{edu.school}</h4>
                
                <h3>Intermediate:</h3>
                <h4>{edu.college}</h4>
                
                <h3>University:</h3>
                <h4>{edu.university}</h4>
                
                <p className="info">{edu.degree}</p>
                <p className="info">{edu.degree1}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br /><br />

      {/* Work Section - OPTIMIZED */}
      <div className="row ">
        <div className="three columns header-col">
          <h1><span></span></h1>
        </div>
        <div style={{ marginBottom: "20px" }} className="nine columns main-col">
          <h1><span>Work</span></h1>
          {data.work.slice().reverse().map((job) => (
            <div key={`${job.company}-${job.years}`}>
              <h3>{job.company}</h3>
              <p className="info">
                {job.title} <span>&bull;</span>{" "}
                <em className="date">{job.years}</em>
              </p>
              <ul>
                <li>{job.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section - UNCHANGED */}
      <div className="row ">
        <div className="three columns header-col">
          <h1><span></span></h1>
        </div>
       
        <div  style={{ marginBottom: "20px" }} className="nine columns main-col">
          <h1><span>Skills</span></h1>
          <p>{data.skillmessage}</p> <br/> <br/>
          <div className="bars">
            <ul className="skills">
              {data.skills.map((skill) => (
                <li key={skill.name}>
                  <span 
                    style={{ width: skill.level }} 
                    className={`bar-expand ${skill.name.toLowerCase()}`}
                  ></span>
                  <em>{skill.name}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;