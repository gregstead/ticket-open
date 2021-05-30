import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import PatronListResults from "src/components/patron/PatronListResults";
import PatronListToolbar from "src/components/patron/PatronListToolbar";
import mock_patrons from "src/__mocks__/patrons";

const PatronList = () => (
  <>
    <Helmet>
      <title>Patrons | Ticket Open</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <PatronListToolbar />
        <Box sx={{ pt: 3 }}>
          <PatronListResults patrons={mock_patrons} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PatronList;
