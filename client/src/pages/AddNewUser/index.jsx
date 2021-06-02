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

      <fieldSet>
        <label>
          Street number:
          <input
            type="text"
            name="streetNumber"
            value={userState.streetNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Building Name:
          <input
            type="text"
            name="buildingName"
            value={userState.buildingName}
            onChange={handleChange}
          />
        </label>
        <label>
          Street number suffix:
          <input
            type="text"
            name="streetNumberSuffix"
            value={userState.streetNumberSuffix}
            onChange={handleChange}
          />
        </label>
        <label>
          Street name:
          <input
            type="text"
            name="streetName"
            value={userState.streetName}
            onChange={handleChange}
          />
        </label>
        <label>
          Street type:
          <input
            type="text"
            name="streetType"
            value={userState.streetType}
            onChange={handleChange}
          />
        </label>
        <label>
          Street direction:
          <select
            name="streetDirection"
            value={userState.streetDirection}
            onChange={handleChange}
          >
            <option selected value="none"></option>
            <option value="n">N</option>
            <option value="ne">NE</option>
            <option value="e">E</option>
            <option value="se">SE</option>
            <option value="s">S</option>
            <option value="sw">SW</option>
            <option value="W">W</option>
            <option value="nw">NW</option>
          </select>
        </label>
        <label>
          Address type:
          <select
            name="addressType"
            value={userState.addressType}
            onChange={handleChange}
          >
            <option selected value="none"></option>
            <option value="home">Home</option>
            <option value="apt">Apartment</option>
            <option value="fl">Floor</option>
            <option value="ste">Suite</option>
            <option value="pobox">PO Box</option>
            <option value="office">Office</option>
            <option value="unit">Unit</option>
          </select>
        </label>
        <label>
          Municipality:
          <input
            type="text"
            name="localMunicipality"
            value={userState.localMunicipality}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={userState.city}
            onChange={handleChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="giverningDistrict"
            value={userState.giverningDistrict}
            onChange={handleChange}
          />
        </label>
        <label>
          Zip/Postal code:
          <input
            type="text"
            name="postalArea"
            value={userState.postalArea}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={userState.country}
            onChange={handleChange}
          />
        </label>
      </fieldSet>
      <label>
        Home phone :
        <input
          type="text"
          name="phone"
          value={userState.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Mobile phone:
        <input
          type="text"
          name="mobile"
          value={userState.mobile}
          onChange={handleChange}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          value={userState.email}
          onChange={handleChange}
        />
      </label>
      <label>
        website:
        <input
          type="text"
          name="website"
          value={userState.website}
          onChange={handleChange}
        />
      </label>
      <label>
        Facebook:
        <input
          type="text"
          name="facebook"
          value={userState.facebook}
          onChange={handleChange}
        />
      </label>
      <label>
        Twitter:
        <input
          type="text"
          name="twitter"
          value={userState.twitter}
          onChange={handleChange}
        />
      </label>
      <label>
        LinkedIn
        <input
          type="text"
          name="linkedIn"
          value={userState.linkedIn}
          onChange={handleChange}
        />
      </label>
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
