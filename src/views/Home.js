import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import CharacterList from "../components/CharacterList";
import Spinner from "../components/Spinner";
import NoResult from "../components/NoResult";

function Home({ baseApiUrl }) {
  const [api, setApi] = useState(baseApiUrl);
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <div>
      <Filter baseApiUrl={baseApiUrl} setApiUrl={setApi} />
      {loading ? (
        <Spinner />
      ) : characters.error ? (
        <NoResult buttonClick={() => setApi(baseApiUrl)} />
      ) : (
        <>
          <CharacterList characters={characters.results} />
          <Pagination
            setApi={setApi}
            next={characters.info?.next}
            prev={characters.info?.prev}
          />
        </>
      )}
    </div>
  );
}

export default Home;
