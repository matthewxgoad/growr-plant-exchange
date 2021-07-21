import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import plantClip from "../../assets/pictures/plantClip.png"
import "./AboutCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(70),
      padding: "2rem",
    },
  },
  aboutHeader: {
    fontFamily: "Oswald",
  },
  growrName: {
    fontFamily: "Dancing Script",
    fontSize: "1.5rem",
    color: "green"
  },
  teamMemberName: {},
}));

export default function AboutCard() {
  const classes = useStyles(

  );

  return (
    <div className={classes.root}>
      <Paper elevation={1}
        >
        <Typography
          variant="h4"
          gutterBottom
          className={classes.aboutHeader}
          align="center"
        >
          about
        </Typography>
        <Typography variant="body1">
          <p>
            Welcome to <span className={classes.growrName}>growr</span>, a plant exchange app with the focus of promoting
            community/local gathering and networking through the love of all
            things plant related.
          </p>

          <p>
            With the dependency on mobile apps rooted deep in our behaviors, we
            want to revitalize what it means to be part of and have the support
            of a community. Growr acts as a facilitator of "good neighbor vibes"
            by targeting the all your activities within a set radius - we're in
            support of face-to-plant interactions, not emoji-to-emoji.
            🌱
          </p>

          <p>
            Exchanges are just to get you into first gear - trade seeds for
            clippings, give away some free aloe pups, request some strange
            succulent to add to the collection - grow not just new plants but
            also your community and hit up the farmer's market or start a new
            urban/community garden with your new-to-you neighbors!
          </p>
        </Typography>
        <div align="center"><img src={plantClip} alt="potted plant" width="150px" /></div>
      </Paper>

      <Paper elevation={1}>
        <Typography
          variant="h4"
          gutterBottom
          className={classes.aboutHeader}
          align="center"
        >
          the team
        </Typography>
        <Typography gutterBottom variant="body1">
        <span className={classes.growrName}>growr</span> was born as a coding boot camp project and brought together an awesome and diverse team. Originally envisoned as an application for locating and sharing community gardens, the team's creativity and hard work has seen it <em>grow</em> into more. At the beginning of the project Brandon, Riheel, and Pam focused more on the back end while Felicia and Matt worked on the front, but as the project progressed everyone worked on the <em>full stack</em> and got their code into all aspects of the site.
        </Typography>
        <br />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
          align="center"
        >
          Brandon Maxwell
          <IconButton
            color="primary"
            href={"https://github.com/brandon-maxwell"}
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href={"https://www.linkedin.com/in/brandon-maxwell-b307b955/"}
            color="primary"
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
          align="center"
        >
          Felicia Wootton
          <IconButton
            color="primary"
            href={"https://github.com/fdwootton"}
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://www.linkedin.com/in/felicia-wootton-9bb859203/"}
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
          align="center"
        >
          Matt Goad
          <IconButton
            color="primary"
            href={"https://github.com/matthewxgoad"}
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://www.linkedin.com/in/goadmatthew/"}
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
          align="center"
        >
          Pam Hsu
          <IconButton
            color="primary"
            href={"https://github.com/p-hsu"}
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://www.linkedin.com/in/pamela-hsu-b46384202/"}
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
          align="center"
        >
          Riheel Hamoande
          <IconButton
            color="primary"
            href={"https://github.com/riheelh"}
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            href={"https://www.linkedin.com/in/riheel-hamoande-8791a831/"}
            target="blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>
      </Paper>
    </div>
  );
}
