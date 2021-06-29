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
        const { name, value } = event.target;
        setUserState({ ...userState, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        API.createNewUser(userState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name:
                <input
                    type="text"
                    name="first_name"
                    value={userState.firstName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last name:
                <input
                    type="text"
                    name="last_name"
                    value={userState.lastName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={userState.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={userState.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Confirm Password:
                <input
                    type="password"
                    name="password"
                // onChange=check password match
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        )
}

export default NewUserPage;
