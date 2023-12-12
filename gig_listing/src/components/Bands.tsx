import AllGigs from "./AllGigs";
interface Bands {
  gig_id: string;
  header: string;
  imageSrc: string;
  imageTitle: string;
  description: string;
  date: string;
  time: string;
  location: string;
  favorited: boolean;
}

const Bands: React.FC = () => {
  
  const allBands: Bands[] = [
    {
      "gig_id": "1",
      "header": "THE BROTHERS KEG",
      "imageSrc": "images/Brothers-Keg-2-1140x641.jpg",
      "imageTitle": "lightening",
      "description": "Watch the Keg travel trough time",
      "date": "6/6/666",
      "time": "INFINITY",
      "location": "ASTRAL PLANE",
      "favorited": false
    },
    {
      "gig_id": "2",
      "header": "BLACK SABBATH",
      "imageSrc": "images/download.jpg",
      "imageTitle": "groovy",
      "description": "ALRIGHT RIGHT NOW!",
      "date": "23/02/1970",
      "time": "666",
      "location": "Birmingham",
      "favorited": false
    },
    {
      "gig_id": "3",
      "header": "LED ZEPPELIN",
      "imageSrc": "images/led-zeppelin.jpg",
      "imageTitle": "classic",
      "description": "Stairway to Heaven",
      "date": "12/10/1968",
      "time": "20:00",
      "location": "London",
      "favorited": false
    },
    {
      "gig_id": "4",
      "header": "THE ROLLING STONES",
      "imageSrc": "images/rolling-stones.jpg",
      "imageTitle": "iconic",
      "description": "Start Me Up",
      "date": "25/03/1962",
      "time": "21:30",
      "location": "New York",
      "favorited": false
    },
    {
      "gig_id": "5",
      "header": "NIRVANA",
      "imageSrc": "images/nirvana.jpg",
      "imageTitle": "grunge",
      "description": "Smells Like Teen Spirit",
      "date": "11/09/1991",
      "time": "22:15",
      "location": "Seattle",
      "favorited": false
    }
  ];

  return<bandArray={allBands}/>
    
    
}
 
export default Bands;