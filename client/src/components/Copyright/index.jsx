import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Made with ❤️ by "}
        <Link color="inherit" href="https://gregstead.github.io">
          Greg Stead
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  