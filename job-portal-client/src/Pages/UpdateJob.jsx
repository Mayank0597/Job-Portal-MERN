// import React from "react";
// import { useParams } from "react-router-dom";

// const UpdateJob = () => {
//   const { id } = useParams();
//   console.log(id);
//   return <div>UpdateJob</div>;
// };

// export default UpdateJob;
// --------------------------------------------------------------------------------------

import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateJob = () => {
  const job = useLoaderData();

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{job.jobTitle}</h1>
      <p>Company: {job.companyName}</p>
      <p>Location: {job.jobLocation}</p>
      <p>Experience Level: {job.experienceLevel}</p>
      <p>
        Salary: {job.minPrice} - {job.maxPrice} {job.salaryType}
      </p>
      <p>Description: {job.description}</p>
      <p>Posted by: {job.postedBy}</p>
      <div>
        <h3>Skills Required:</h3>
        <ul>
          {job.skills.map((skill) => (
            <li key={skill.value}>{skill.label}</li>
          ))}
        </ul>
      </div>
      <img src={job.companyLogo} alt={`${job.companyName} logo`} />
    </div>
  );
};

// export default UpdateJob;
// -------------------------------------------------------------------------------------
