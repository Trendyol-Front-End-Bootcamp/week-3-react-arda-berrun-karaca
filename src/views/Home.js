import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import CharacterList from "../components/CharacterList";
import Spinner from "../components/Spinner";
import NoResult from "../components/NoResult";
import { getCharacters } from "../services/character-service";



function Home() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchQueries, setSearchQueries] = useState({
    name: '',
    status: '',
    gender: ''
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const characterData = await getCharacters(searchQueries, page);

      setCharacters(characterData);
      setLoading(false);
    })();
  }, [searchQueries, page]);


  return (
    <div>
      <Filter setPage={setPage} searchQueries={searchQueries} setSearchQueries={setSearchQueries}/>
      {loading ? (
        <Spinner />
      ) : characters.error ? (
        <NoResult buttonClick={() => {
          setSearchQueries({
            name: '',
            status: '',
            gender: ''
          });
          setPage(1);
        }} />
      ) : (
        <>
          <CharacterList characters={characters.results} />
          <Pagination
            setPage={setPage}
            next={characters.info?.next}
            prev={characters.info?.prev}
          />
        </>
      )}
    </div>
  );
}

export default Home;
