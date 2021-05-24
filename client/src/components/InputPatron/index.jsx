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
        salutation
        <input
          type="text"
          name="salutation"
          id="salutation"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input type="text" name="email" id="email" onChange={handleChange} />
      </label>
      <label>
        Street:
        <input type="text" name="street" id="street" onChange={handleChange} />
      </label>
      <label>
        Street:
        <input
          type="text"
          name="street2"
          id="street2"
          onChange={handleChange}
        />
      </label>
      <label>
        city:
        <input type="text" name="city" id="city" onChange={handleChange} />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          onChange={handleChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          id="country"
          onChange={handleChange}
        />
      </label>
      <label>
        Notes:
        <input
          type="textarea"
          name="notes"
          id="notes"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}
