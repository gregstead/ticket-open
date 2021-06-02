import React, { useState } from "react";
import API from "../../utils/API";

function UserForm() {
  const [userState, setUserState] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    salutation: "",
    address: {
      streetNumber: "",
      buildingName: "",
      streetNumberSuffix: "",
      streetName: "",
      streetType: "",
      streetDirection: "",
      addressType: "",
      addressTypeIdentifier: "",
      localMunicipality: "",
      city: "",
      governingDistrict: "",
      postalArea: "",
      country: "",
    },
    phone: "",
    mobile: "",
    email: "",
    role: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserState({ ...userState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.createNewUser(userState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldSet>
        <label>
          Salutation:
          <input
            type="text"
            name="salutation"
            value={userState.salutation}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <select name="title" value={userState.title} onChange={handleChange}>
            <option selected value="none"></option>
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
            <option value="mrs">Mrs.</option>
            <option value="dr">Dr.</option>
          </select>
        </label>
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
          middle name:
          <input
            type="text"
            name="middleName"
            value={userState.middleName}
            onChange={handleChange}
          />
        </label>
        <label>
          last name:
          <input
            type="text"
            name="lastName"
            value={userState.lastName}
            onChange={handleChange}
          />
        </label>
      </fieldSet>

      <label>
        Role:
        <input
          type="text"
          name="role"
          value={userState.role}
          onChange={handleChange}
        />
      </label>
      <label>
        Business:
        <input
          type="text"
          name="business"
          value={userState.business}
          onChange={handleChange}
        />
      </label>
      <label>
        Notes
        <input
          type="text"
          name="notes"
          value={userState.notes}
          onChange={handleChange}
        />
      </label>
      <label>
        Representative
        <input
          type="text"
          name="representative"
          value={userState.representative}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UserForm;
