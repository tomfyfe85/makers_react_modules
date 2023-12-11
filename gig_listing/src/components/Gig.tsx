import React, { useState } from 'react'

const Gig: React.FC<{
  header: string;
  imageSrc: string;
  imageTitle: string;
  description: string;
  date: string;
  time: string;
  location: string
}> = ({gig_id, header, imageSrc, imageTitle, description, date, time, location, band, setBand }) => {
  const [fav, setFav] = useState<boolean>(false)
  
  const favorite = () => {
    setFav((prevValue) => !prevValue)
    
  }

  return (
    <>
      <h3>{header}</h3>
      <img src={imageSrc} title={imageTitle} />
      <p>{description}</p>
      <p>Date:{date} Time:{time}</p>
      <p>Location: {location}</p>
      <p>{fav ? 'click to add to favorites' : 'added to favorites, click to remove' }</p>
      <button onClick={favorite} title='favorite'>favorite button</button>
    </>
  );
};

export default Gig;
