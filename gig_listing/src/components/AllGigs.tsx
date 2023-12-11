import { useState } from "react";
import Gig from "./Gig";

// bands is being passed in from App component
const AllGigs = ({ allBands }) => {
  const [bands, setBands] = useState();

  return (
    <>
      <div>
        {bands.map((band) => {
          return <Gig
          gig_id={1}
          header={KEG_HEADER}
          imageSrc={KEG_IMAGE_SRC}
          imageTitle={KEG_IMAGE_TITLE}
          description={KEG_DESCRIPTION_OF_SHOW}
          date={KEG_DATE}
          time={KEG_TIME}
          location={KEG_LOCATION}
          bands={bands}
  
        />
        })}
      </div>
    </>
  );
};

export default AllGigs;
