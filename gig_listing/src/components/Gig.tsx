import React from "react";

const Gig: React.FC<{
  header: string;
  imageSrc: string;
  imageTitle: string;
  description: string;
  date: string;
  time: string;
  location: string
}> = ({header, imageSrc, imageTitle, description, date, time, location }) => {
  return (
    <>
      <h3>{header}</h3>
      <img src={imageSrc} title={imageTitle} />
      <p>{description}</p>
      <p>Date{date} Time:{time}</p>
      <p>Location: {location}</p>
    </>
  );
};

export default Gig;
