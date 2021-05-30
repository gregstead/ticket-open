import axios from "axios";

const API = {
  // Patron methods
  // Get patron
  getAllPatrons: function (id) {
    let url = "/patron/";
    return axios.get(url);
  },
  // Add one patron
  addOnePatron: function (patron) {
    return axios.post("/patron", patron);
  },
};

export default API;
