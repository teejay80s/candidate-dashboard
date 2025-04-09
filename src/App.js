import React, { useState, useEffect } from "react";
import CandidateList from "./module/CandidateList";
import AddCandidateForm from "./component/Form";

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const savedCandidates =
      JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(savedCandidates);
  }, []);

  const handleAddCandidate = (newCandidate) => {
    const updatedCandidates = [...candidates, newCandidate];
    setCandidates(updatedCandidates);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <AddCandidateForm onAddCandidate={handleAddCandidate} />
      <CandidateList candidates={candidates} />
    </div>
  );
};

export default App;
