import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import PatronTable from "../../components/Table/PatronTable";

export default function Patrons() {
  const [searchState, setSearchState] = useState({
    search: "",
    filteredCache: [],
    results: [],
  });

  // API call for patrons
  useEffect(() => {
    API.getAllPatrons()
      .then((result) => {
        setSearchState({ ...searchState, results: result.data });
      })
      .catch((err) => console.error(err));
  }, []);

  return <PatronTable patrons={searchState.results} />;
}
