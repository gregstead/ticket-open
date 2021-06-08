module.exports = function users_map(json) {
  const usersMap = json.results.map((user, idx) => {
    function isManager(num) {
      if (num % 5 === 0) {
        return true;
      }
      return false;
    }
    return {
      first_name: user.name.first,
      last_name: user.name.last,
      email: user.email,
      password: user.login.password,
      is_manager: isManager(idx),
      createdAt: "2020-12-01",
      updatedAt: "2021-06-07",
    };
  });
  return usersMap;
};
