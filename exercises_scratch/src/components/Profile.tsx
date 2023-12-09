// import React from "react";

const Profile: React.FC<{ name: string; job: string; birth_date: string }> = ({
  name,
  job,
  birth_date,
}) => {
  return (
    <div id="profile">
      <h1 id="name">{name}</h1>
      <p id="job">{job}</p>
      <p id="birth_date">{birth_date}</p>
    </div>
  );
};

export default Profile;
