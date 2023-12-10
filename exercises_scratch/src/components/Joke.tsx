import React, { useState, useEffect } from "react";

interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
const Joke: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  console.log(joke);

  const newJoke = () => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(joke);
  }
  useEffect(() => {
  newJoke()
  },[]);

  return (
    <>
      <h2>JOKE GENERATOR</h2>
      <div className="joke_generator">
        {joke ? (
          <div>
            <p>setup: {joke.setup}</p>
            <p>punch line: {joke.punchline}</p>

          </div>
        ) : (
          <p>Loading...</p>
        )}

        <button onClick={newJoke}>NEW JOKE BUTTON</button>
      </div>
    </>
  );
};
export default Joke;
