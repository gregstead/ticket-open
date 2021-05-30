import { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import getInitials from "src/utils/getInitials";

const PatronListResults = ({ patrons, ...rest }) => {
  const [selectedPatronIds, setSelectedPatronIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPatronIds;

    if (event.target.checked) {
      newSelectedPatronIds = patrons.map((patron) => patron.id);
    } else {
      newSelectedPatronIds = [];
    }

    setSelectedPatronIds(newSelectedPatronIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPatronIds.indexOf(id);
    let newSelectedPatronIds = [];

    if (selectedIndex === -1) {
      newSelectedPatronIds = newSelectedPatronIds.concat(selectedPatronIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPatronIds = newSelectedPatronIds.concat(
        selectedPatronIds.slice(1)
      );
    } else if (selectedIndex === selectedPatronIds.length - 1) {
      newSelectedPatronIds = newSelectedPatronIds.concat(
        selectedPatronIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPatronIds = newSelectedPatronIds.concat(
        selectedPatronIds.slice(0, selectedIndex),
        selectedPatronIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPatronIds(newSelectedPatronIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedPatronIds.length === patrons.length}
                    color="primary"
                    indeterminate={
                      selectedPatronIds.length > 0 &&
                      selectedPatronIds.length < patrons.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patrons.slice(0, limit).map((patron) => (
                <TableRow
                  hover
                  key={patron.id}
                  selected={selectedPatronIds.indexOf(patron.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedPatronIds.indexOf(patron.id) !== -1}
                      onChange={(event) => handleSelectOne(event, patron.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={patron.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(patron.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {patron.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{patron.email}</TableCell>
                  <TableCell>
                    {`${patron.address.city}, ${patron.address.state}, ${patron.address.country}`}
                  </TableCell>
                  <TableCell>{patron.phone}</TableCell>
                  <TableCell>
                    {moment(patron.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={patrons.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PatronListResults.propTypes = {
  Patrons: PropTypes.array.isRequired,
};

export default PatronListResults;
