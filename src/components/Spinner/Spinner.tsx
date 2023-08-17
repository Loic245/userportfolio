import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        bgcolor: "#282c34",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;