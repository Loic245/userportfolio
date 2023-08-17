import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const theme = useTheme();
  const downXS = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useNavigate();

  const data = [
    {
      icon: <LocationOnIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "Ankadikely Ilafy, Antananarivo III, Madagascar",
      name: "Localisation",
    },
    {
      icon: <PhoneIphoneIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "+261 33 04 207 63 / +261 34 77 613 23",
      name: "Numéro de Portable",
    },
    {
      icon: <MailOutlineIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "rakotoarintsifaloic@gmail.com",
      name: "Adresse e-mail",
    },
    {
      icon: <FacebookIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "Lucas Harrison",
      name: "Facebook",
    },
    {
      icon: <LinkedInIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "Rakotoarintsifa Loïc Judicaël Harrison",
      name: "LinkedIn",
    },
    {
      icon: <WhatsAppIcon sx={{ color: "#ffff00", fontSize: "35px" }} />,
      link: "+261 33 04 207 63",
      name: "WhatsApp",
    },
  ];

  return (
    <Box className="container-page">
      <center>
        <Typography variant={downXS ? "h4" : "h2"} sx={{ color: "#61dafb" }}>
          Contactez-moi
        </Typography>
      </center>
      <br />
      <Grid container>
        {data
          .filter((k: any) => k.name !== "Facebook" && k.name !== "LinkedIn")
          .map((k: any) => (
            <Grid xs={12} sm={12} md={4} lg={4} className="card-contact">
              <div className="card-content">
                {k.icon}
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#fff", fontWeight: 500 }}
                >
                  {k.name}
                </Typography>
                <br />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#fff", textAlign: "center" }}
                >
                  {k.link}
                </Typography>
              </div>
            </Grid>
          ))}
        {data
          .filter(
            (k: any) =>
              k.name !== "Localisation" &&
              k.name !== "WhatsApp" &&
              k.name !== "Adresse e-mail" &&
              k.name !== "Numéro de Portable"
          )
          .map((k: any) => (
            <Grid xs={12} sm={12} md={4} lg={4} className="card-contact">
              <a
                href={
                  k.name === "Facebook"
                    ? "https://web.facebook.com/profile.php?id=100004113196675"
                    : k.name === "LinkedIn"
                    ? "https://mg.linkedin.com/in/loic-judica%C3%ABl-rakotoarintsifa-3a229420a"
                    : ""
                }
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="card-content">
                  {k.icon}
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#fff", fontWeight: 500 }}
                  >
                    {k.name}
                  </Typography>
                  <br />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#fff", textAlign: "center" }}
                  >
                    {k.link}
                  </Typography>
                </div>
              </a>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Contact;