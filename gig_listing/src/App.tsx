import "./App.css";
import Gig from "./components/Gig";
import Events from "./components/Events";
function App() {

  const KEG_HEADER: string = "THE BROTHERS KEG";
  const KEG_IMAGE_SRC: string = "images/Brothers-Keg-2-1140x641.jpg";
  const KEG_IMAGE_TITLE: string = "lightening";
  const KEG_DESCRIPTION_OF_SHOW: string = "Watch the Keg travel trough time";
  const KEG_DATE: string = "6/6/666";
  const KEG_TIME: string = "INFINITY";
  const KEG_LOCATION: string = "ASTRAL PLANE";

  const SAB_HEADER: string = "BLACK SABBATH";
  const SAB_IMAGE: string = "images/download.jpg";
  const SAB_IMAGE_TITLE: string = "groovy";
  const SAB_DESCRIPTION: string = "ALRIGHT RIGHT NOW!";
  const SAB_DATE: string = "23/02/1970";
  const SAB_TIME: string = "666";
  const SAB_LOCATION: string = "Birmingham";

  return (
    <>
      <Gig
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
      <Gig
        gid_id={2}
        header={SAB_HEADER}
        imageSrc={SAB_IMAGE}
        imageTitle={SAB_IMAGE_TITLE}
        description={SAB_DESCRIPTION}
        date={SAB_DATE}
        time={SAB_TIME}
        location={SAB_LOCATION}
        bands={bands}
      />
      <Events/>
    </>
  );
}

export default App;

