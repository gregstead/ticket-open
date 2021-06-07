module.exports = function addressMap(json) {
  const maptemp = json.results.map((location) => {
    return {
      line1:
        location.location.street.number + " " + location.location.street.name ||
        location.location.street,
      line2: null,
      line3: null,
      line4: null,
      city: location.location.city,
      region: location.location.state,
      postcode: location.location.postcode,
      country: location.location.country,
      createdAt: "2020-12-01",
      updatedAt: "2021-06-07",
    };
  });
  return maptemp;
};
