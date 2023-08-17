import MenuBar from "../MenuBar";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, useMediaQuery } from "@mui/material";

interface ILayout {
  children: any;
}

const Layout = (props: any) => {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { children } = props as any;
  return (
    <Box className="bg-color">
      <Box
        sx={{
          position: downSM ? "fixed" : "inherit",
          zIndex: "5",
          bgcolor: "#1d2630",
        }}
      >
        <MenuBar />
      </Box>
      <Box>
        <Grid
          padding={
            !matchSM && !downMD
              ? "0 8rem"
              : matchSM && !downMD
              ? "0 5rem"
              : "0 1rem"
          }
        >
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            paddingTop={downSM ? "4rem" : 0}
          >
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;