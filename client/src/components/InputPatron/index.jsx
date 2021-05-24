import React, { useState } from "react";
import API from "../../utils/API";

export default function InputPatron(props) {
  const [patronState, setPatronState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    salutation: "",
    email: "",
    street: "",
    street2: "",
    city: "",
    zipCode: "",
    country: "",
    notes: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(patronState);
    API.addOnePatron(patronState);

    setPatronState({
      title: "",
      firstName: "",
      lastName: "",
      salutation: "",
      email: "",
      street: "",
      street2: "",
      city: "",
      zipCode: "",
      country: "",
      notes: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setPatronState({
      ...patronState,
      [name]: value,
    });
  }

  return (
    <form>
      <label>
        First name:
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input type="text" name="email" id="email" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
