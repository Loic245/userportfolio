import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Experience = () => {
  const theme = useTheme();
  const downXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="container-page">
      <center>
        <Typography variant={downXS ? "h4" : "h2"} sx={{ color: "#61dafb" }}>
          Mes expériences
        </Typography>
      </center>
      <br />
      <Grid container>
        <Grid xs={12} sm={12} md={3} lg={3} className="grid-container">
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 500,
              textDecoration: "underline",
            }}
          >
            Développement d'une application web React JS et Node JS pour une
            projet scolaire
          </Typography>
          <br />

          <Typography variant="subtitle2" className="typography-white">
            J'ai créé toute l'architecture de base de l'application et aussi
            installer les différentes dépendances nécessaires concernant le
            cahier des charges. <br /> Ce projet consiste avant tout la gestion
            d'une école en particulier, la gestion de ses utilisateurs, le
            partage des données, la communication entre utilisateurs ainsi que
            le téléchargement de plusieurs fichiers au sein d'une bibliothèque
            numérique.
          </Typography>
          <br />
          <span className="typography-white">
            Période : Mai 2023 - Juin 2023
          </span>
          <br />
        </Grid>

        <Grid xs={12} sm={12} md={3} lg={3} className="grid-container">
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: 500, textDecoration: "underline" }}
          >
            Développement d'une application web React JS et Node JS pour la
            société CLICAR
          </Typography>
          <br />

          <Typography variant="subtitle2" className="typography-white">
            J'ai participé au développement de l'application en tant que
            développeur fullstack MERN. J'effectuai à la fois les tâches
            concernant le front-end ainsi que le back-end. <br />
            J'ai participé aux divers débogage et maintenance de l'application
            ainsi qu'à la réalisation de nouvelles fonctionnalités demandée par
            le client.
          </Typography>
          <br />
          <span className="typography-white">
            Période : Février 2022 - Mai 2023
          </span>
          <br />
        </Grid>

        <Grid xs={12} sm={12} md={3} lg={3} className="grid-container">
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: 500, textDecoration: "underline" }}
          >
            Stagiaire en développement web chez Numerika Center Analamahitsy
            Antananarivo
          </Typography>
          <br />
          <Typography variant="subtitle2" className="typography-white">
            J'ai participé au développement de l'application en tant que
            stagiaire développeur PHP en utilisant Laravel 7.0.
            <br />
            J'ai participé aux divers débogage et maintenance de l'application
            ainsi qu'à la réalisation de nouvelles fonctionnalités demandée par
            le client.
          </Typography>
          <br />
          <span className="typography-white">
            Période : Novembre 2021 - Février 2022
          </span>
          <br />
        </Grid>

        <Grid xs={12} sm={12} md={3} lg={3} className="grid-container">
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: 500, textDecoration: "underline" }}
          >
            Stagiaire en développement web chez MENETP Ampefiloha Antananarivo
          </Typography>
          <br />
          <Typography variant="subtitle2" className="typography-white">
            Poste : Stagiaire en développement informatique,
            <br />
            J'ai créé une application en PHP Laravel 5.8 concernant la
            numérisation des diplômes BEPC et CEPE au sein du Ministère de
            l&apos;Education Nationale et de l&apos;Enseignement Technique et
            Professionnelle Ampefiloha. <br /> Département des Examens et de la
            Certification
          </Typography>
          <br />
          <span className="typography-white">
            Période : Février 2021 - Mai 2021
          </span>
          <br />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;