import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Competence = () => {
  const theme = useTheme();
  const downXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="container-page">
      <center>
        <Typography variant={downXS ? "h4" : "h2"} sx={{ color: "#61dafb" }}>
          Mes compétences
        </Typography>
      </center>
      <br />
      <Grid container>
        <Grid xs={12} sm={12} md={4} lg={4} className="grid-container">
          <Typography variant="h5" sx={{ color: "#fff" }}>
            LINGUISTIQUE
          </Typography>
          <div className="list">
            <p>Malagasy</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>

          <div className="list">
            <p>Français</p>
            <div className="line-box">
              <div className="line-80"></div>
            </div>
          </div>

          <div className="list">
            <p>Anglais</p>
            <div className="line-box">
              <div className="line-70"></div>
            </div>
          </div>
          <br />

          <Typography variant="h5" sx={{ color: "#fff" }}>
            HTML et CSS
          </Typography>
          <div className="list">
            <p>HTML 5 / CSS 3</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>

          <div className="list">
            <p>Bootstrap / Material UI</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>
          <br />
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} className="grid-container">
          <Typography variant="h5" sx={{ color: "#fff" }}>
            JAVASCRIPT
          </Typography>

          <div className="list">
            <p>Javascript / Typescript</p>
            <div className="line-box">
              <div className="line-80"></div>
            </div>
          </div>

          <div className="list">
            <p>React JS</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>

          <div className="list">
            <p>Angular JS / Next JS</p>
            <div className="line-box">
              <div className="line-50"></div>
            </div>
          </div>

          <div className="list">
            <p>Node JS / Express JS</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>

          <div className="list">
            <p>Mobx</p>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </div>

          <div className="list">
            <p>Redux / React-redux</p>
            <div className="line-box">
              <div className="line-50"></div>
            </div>
          </div>
          <br />
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} className="grid-container">
          <Typography variant="h5" sx={{ color: "#fff" }}>
            PHP
          </Typography>

          <div className="list">
            <p>PHP / Laravel 7.0</p>
            <div className="line-box">
              <div className="line-70"></div>
            </div>
          </div>
          <br />

          <Typography variant="h5" sx={{ color: "#fff" }}>
            BASE DE DONN&#201;E
          </Typography>

          <div className="list">
            <p>MySQL</p>
            <div className="line-box">
              <div className="line-70"></div>
            </div>
          </div>
          <div className="list">
            <p>MongoDB</p>
            <div className="line-box">
              <div className="line-80"></div>
            </div>
          </div>
          <br />

          <Typography variant="h5" sx={{ color: "#fff" }}>
            AUTRE
          </Typography>

          <div className="list">
            <p>Python</p>
            <div className="line-box">
              <div className="line-30"></div>
            </div>
          </div>

          <div className="list">
            <p>Docker</p>
            <div className="line-box">
              <div className="line-50"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Competence;