import React from "react";

function PatronTable(props) {
  const { patrons } = props;
  const [sortField, setSortField] = React.useState(null);

  let sortedPatrons = [...patrons];
  // Sort patrons

  if (sortField !== null) {
    sortedPatrons.sort((a, b) => {
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
          <th scope="col" onClick={() => setSortField("lastName")}>
            Name
          </th>
          <th scope="col" onClick={() => setSortField("email")}>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Dynamically generate table rows */}
        {sortedPatrons.map((patron, _idx) => (
          <tr key={patron.email}>
            <th scope="row">
              {/* <img
                // src={patron.picture.medium}
                alt={`${patron.firstName} ${patron.lastName}`}
              /> */}
            </th>
            <td>{`${patron.firstName} ${patron.lastName}`}</td>
            <td>{patron.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PatronTable;
