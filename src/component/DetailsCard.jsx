import React from "react";
import "../index.css";

const CandidateCard = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>{candidate.role}</p>
      <div>
        <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={candidate.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div className="experience-level">{candidate.experience}</div>
      <div>
        {candidate.techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
