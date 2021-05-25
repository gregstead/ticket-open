import axios from "axios";

const API = {
  // Patron methods
  // Create one patron
  createOnePatron: function (patron) {
    return axios.post("/patron", patron);
  },
  // Get one patron
  // Get all patrons
  getAllPatrons: function (id) {
    let url = "/patron/";
    return axios.get(url);
  },
};

export default API;
