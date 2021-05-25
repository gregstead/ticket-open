import axios from "axios";

const API = {
  // Patron methods
  // Add one patron
  addPatron: function (patron) {
    return axios.post("/patron", patron);
  },
  // Get patrons
  getAllPatrons: function () {
    let url = "/patron/";
    return axios.get(url);
  },
  // Get patron by id
  getPatron: function (id) {
    let url = "/patron/" + id;
    return axios.get(url);
  },
  // Update one patron
  updateOnePatron: function (id, patron) {
    let url = "/patron/" + id;
    return axios.put(url, patron);
  },
};

export default API;
