import axios from "axios";

const API = {
  userLogin(email, password) {
    return axios.post("/api/auth/login", { email: email, password: password });
  },
  // GET	'/patron'	/patron/index	display a list of all patrons
  getAllPatrons() {
    return axios.get("/patron/");
  },
  // POST	'/patron'	--	create a new patron
  createNewPatron(patron) {
    return axios.post("/patron/", patron).catch((err) => console.error(err));
  },
  // GET	'/patron/:id'	/patron/show	display a specific patron
  getPatron(id) {
    const url = "/patron/" + id;
    return axios.get(url);
  },
  // GET	'/patron/:id/edit'	/patron/edit	return an HTML form for editing a patron
  updatePatron(id, patron) {
    const url = "/patron/" + id + "/edit";
    return axios.put(url, patron);
  },
  // PUT	'/patron/:id'	--	update a specific patron

  // DELETE	'/patron/:id'	--	delete a specific patron

  // Method url-path view-file description
  // GET	'/user'	/user/index	display a list of all users
  getAllUsers() {
    return axios.get("/user");
  },
  // GET	'/user/new'	/user/new	return an HTML form for creating a new user
  createNewUser(user) {
    return axios.post("/user/create", user);
  },
  // POST	'/user'	--	create a new user

  // GET	'/user/:id'	/user/show	display a specific user

  // GET	'/user/:id/edit'	/user/edit	return an HTML form for editing a user

  // PUT	'/user/:id'	--	update a specific user

  // DELETE	'/user/:id'	--	delete a specific user
};

export default API;
