import Bands from "./Bands";

const Gig = ({
  gig_id,
  header,
  imageSrc,
  imageTitle,
  description,
  date,
  time,
  location,
  favorited,
  bandsArray,
  setBands,
}) => {
  const favoriteToggle = (gig_id, bandsArray, setBands) => {
    const updatedBandsArray = bandsArray.map((band) => {
      if (band.gig_id === gig_id) {
        return { ...band, favorited: !band.favorited };
      }
      return band;
    });

    console.log("fav");
    setBands(updatedBandsArray);
  };

  return (
    <>
      <h3>{header}</h3>
      <img src={imageSrc} title={imageTitle} />
      <p>{description}</p>
      <p>
        Date:{date} Time:{time}
      </p>
      <p>Location: {location}</p>
      <p>
        {!favorited
          ? "click to add to favorites"
          : "added to favorites, click to remove"}
      </p>
      <button
        onClick={() => favoriteToggle(gig_id, bandsArray, setBands)}
        title="favorite"
      >
        favorite button
      </button>
    </>
  );
};

export default Gig;

function setBands(updatedBandsArray: any) {
  throw new Error("Function not implemented.");
}
