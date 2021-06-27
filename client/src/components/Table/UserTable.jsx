import React from "react";

function UserTable(props) {
  const { users } = props;
  const [sortField, setSortField] = React.useState(null);

  let sortedUsers = [...users];
  // Sort patrons

  if (sortField !== null) {
    sortedUsers.sort((a, b) => {
      switch (sortField) {
        case "email":
          if (a[sortField] < b[sortField]) {
            return -1;
          }
          if (a[sortField] > b[sortField]) {
            return 1;
          }
          return 0;
        case "first":
        case "last":
          if (a.name[sortField] < b.name[sortField]) {
            return -1;
          }
          if (a.name[sortField] > b.name[sortField]) {
            return 1;
          }
          return 0;
        default:
          return 0;
      }
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          {/* Make table headings clickable and set sorter field */}
          <th scope="col" onClick={() => setSortField("id")}>ID</th>
          <th scope="col" onClick={() => setSortField("last_name")}>
            Name
          </th>
          <th scope="col" onClick={() => setSortField("email")}>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Dynamically generate table rows */}
        {sortedUsers.map((user, _idx) => (
          <tr key={user.id}>
            <th scope="row">
            </th>
            <td>{user.id}</td>
            <td>{`${user.first_name} ${user.last_name}`}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default UserTable;
