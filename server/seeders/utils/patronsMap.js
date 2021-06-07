module.exports = function patrons_map(json) {
  const patronMap = json.results.map((patron) => {
    return {
      title: patron.name.title,
      first_name: patron.name.first,
      middle_name: null,
      last_name: patron.name.last,
      phone: patron.phone,
      phone2: patron.cell,
      phone3: null,
      email: patron.email,
      website: "website.com",
      linkedIn: "linkedin.com",
      twitter: "twitter.com",
      facebook: "facebook.com",
      birthday: patron.birthday,
      createdAt: "2020-12-01",
      updatedAt: "2021-06-07",
    };
  });
  return patronMap;
};
