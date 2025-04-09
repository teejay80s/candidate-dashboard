import React from "react";
import CandidateCard from "../component/DetailsCard";

const CandidateList = ({ candidates }) => {
  return (
    <div className="candidate-list">
      {candidates.map((candidate, index) => (
        <CandidateCard key={index} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;
