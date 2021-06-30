import React, { useState } from "react";
import API from "../../utils/API";

function PatronForm() {
  const [patronState, setPatronState] = useState({
    // Patron Name
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    salutation: "",
    // Patron Address
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
    // Patron Contact info
    phone: "",
    mobile: "",
    email: "",
    // Patron Details
    website: "",
    facebook: "",
    twitter: "",
    linkedIn: "",
    role: "",
    business: "",
    notes: "",
    representative: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPatronState({ ...patronState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.createNewPatron(patronState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <select name="title" value={patronState.title} onChange={handleChange}>
          <option selected value="none"></option>
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
          <option value="mrs">Mrs.</option>
          <option value="dr">Dr.</option>
        </select>
      </label>
      <br />
      <label>
        First name:
        <input
          type="text"
          name="firstName"
          value={patronState.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        middle name:
        <input
          type="text"
          name="middleName"
          value={patronState.middleName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        last name:
        <input
          type="text"
          name="lastName"
          value={patronState.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Salutation:
        <input
          type="text"
          name="salutation"
          value={patronState.salutation}
          onChange={handleChange}
        />
      </label>
      <br />
      {/*// Patron Address*/}
      <label>
        Street number:
        <input
          type="text"
          name="streetNumber"
          value={patronState.streetNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Building Name:
        <input
          type="text"
          name="buildingName"
          value={patronState.buildingName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street number suffix:
        <input
          type="text"
          name="streetNumberSuffix"
          value={patronState.streetNumberSuffix}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street name:
        <input
          type="text"
          name="streetName"
          value={patronState.streetName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street type:
        <input
          type="text"
          name="streetType"
          value={patronState.streetType}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Street direction:
        <select
          name="streetDirection"
          value={patronState.streetDirection}
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
      <br />
      <label>
        Address type:
        <select
          name="addressType"
          value={patronState.addressType}
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
      <br />
      <label>
        Municipality:
        <input
          type="text"
          name="localMunicipality"
          value={patronState.localMunicipality}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={patronState.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="giverningDistrict"
          value={patronState.giverningDistrict}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Zip/Postal code:
        <input
          type="text"
          name="postalArea"
          value={patronState.postalArea}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={patronState.country}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Home phone :
        <input
          type="text"
          name="phone"
          value={patronState.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mobile phone:
        <input
          type="text"
          name="mobile"
          value={patronState.mobile}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        email:
        <input
          type="text"
          name="email"
          value={patronState.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        website:
        <input
          type="text"
          name="website"
          value={patronState.website}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Facebook:
        <input
          type="text"
          name="facebook"
          value={patronState.facebook}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Twitter:
        <input
          type="text"
          name="twitter"
          value={patronState.twitter}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        LinkedIn
        <input
          type="text"
          name="linkedIn"
          value={patronState.linkedIn}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={patronState.role}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Business:
        <input
          type="text"
          name="business"
          value={patronState.business}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Notes
        <input
          type="text"
          name="notes"
          value={patronState.notes}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Representative
        <input
          type="text"
          name="representative"
          value={patronState.representative}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PatronForm;
