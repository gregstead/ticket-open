import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import UserTable from "../../components/Table/UserTable";

export default function Users() {
  const [searchState, setSearchState] = useState({
    search: "",
    filteredCache: [],
    results: [],
  });

  // API call for patrons
  useEffect(() => {
    API.getAllUsers()
      .then((result) => {
        setSearchState({ ...searchState, results: result.data });
      })
      .catch((err) => console.error(err));
  }, []);

  return <UserTable users={searchState.results} />;
}
