import React, { useState } from "react";
import "../index.css";

const AddCandidateForm = ({ onAddCandidate }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [experience, setExperience] = useState("junior");
  const [techStack, setTechStack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCandidate = {
      name,
      role,
      linkedin,
      github,
      experience,
      techStack: techStack.split(",").map((tech) => tech.trim()),
    };
    onAddCandidate(newCandidate);
    setName("");
    setRole("");
    setLinkedin("");
    setGithub("");
    setExperience("junior");
    setTechStack("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="LinkedIn URL"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
      />
      <input
        type="text"
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />
      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
      </select>
      <input
        type="text"
        placeholder="Tech Stack (comma-separated)"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
      />
      <button type="submit">Add Candidate</button>
    </form>
  );
};

export default AddCandidateForm;
