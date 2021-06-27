import React, { useState } from "react"
import API from "../../utils/API"

function NewUserPage() {
    const [userState, setUserState] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        
    })

    function handleChange(event) {
        const {name, value } = event.target;
        setUserState({...userState, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.createNewUser(userState);
    }

    return (<form onSubmit={handleSubmit}>
        <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={userState.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          value={userState.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={userState.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={userState.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="password"
          // onChange=check password match
        />
      </label>
    </form>)
}

export default NewUserPage;
