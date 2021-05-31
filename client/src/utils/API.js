import axios from "axios";

const API = {
  // GET	'/patron'	/patron/index	display a list of all patrons
  getAllPatrons() {
    return axios.get("/patron/");
  },
  // POST	'/patron'	--	create a new patron
  createNewPatron(patron) {
    axios
      .post("/patron/", patron)
      .then((data) => {
        return data;
      })
      .catch((err) => console.error(err));
  },
  // Create a new patron

  // GET	'/patron/:id'	/patron/show	display a specific patron

  // GET	'/patron/:id/edit'	/patron/edit	return an HTML form for editing a patron

  // PUT	'/patron/:id'	--	update a specific patron

  // DELETE	'/patron/:id'	--	delete a specific patron
};

export default API;
