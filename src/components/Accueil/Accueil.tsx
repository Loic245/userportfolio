import Pdp from "../../assets/img.jpg";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Accueil = () => {
  const theme = useTheme();
  const downXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="container">
      <Grid container>
        <Grid xs={12} sm={12} md={6} lg={6} className="grid-container">
          <Typography variant={downXS ? "h4" : "h2"} sx={{ color: "#61dafb" }}>
            Développeur web Javascript
          </Typography>
          <br />
          <Typography sx={{ color: "#fff" }} className="typography">
            &nbsp; &nbsp; &nbsp; Personne polyvalente et proactif, capable de
            s'adapter rapidement aux nouvelles situations et de travailler de
            manière autonome ou en équipe. <br />
            <br />
            &nbsp; &nbsp; &nbsp; Esprit créatif et innovant, toujours à la
            recherche de nouvelles opportunités pour améliorer les processus et
            atteindre l'excellence professionnelle.
          </Typography>
          <br />
          <br />
          <br />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} className="grid-container">
          <center>
            <img
              src={Pdp}
              alt="photo de profil"
              width={250}
              height={300}
              className="pdp"
            />{" "}
            <br />
            <br />
            <Typography variant="h6" sx={{ color: "#61dafb" }}>
              RAKOTOARINTSIFA Loïc Judicaël Harrison
            </Typography>
          </center>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Accueil;