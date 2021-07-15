import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import "./AboutCard.css";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(100),
      padding: "2rem",
    },
  },
  aboutHeader: {
    fontFamily: "Oswald",
  },
  teamMemberName: {},
}));

export default function AboutCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1}>
        <Typography variant="h4" gutterBottom className={classes.aboutHeader}>
          about
        </Typography>
        <Typography variant="body1">
          <p>
            Welcome to Growr, a plant exchange app with the focus of promoting
            community/local gathering and networking through the love of all
            things plant related.
          </p>

          <p>
            With the dependency on mobile apps rooted deep in our behaviors, we
            want to revitalize what it means to be part of and have the support
            of a community. Growr acts as a facilitator of "good neighbor vibes"
            by targeting the all your activities within a set radius - we're in
            support of face-to-plant interactions, not emoji-to-emoji.
            :seedling:
          </p>

          <p>
            Exchanges are just to get you into first gear - trade seeds for
            clippings, give away some free aloe pups, request some strange
            succulent to add to the collection - grow not just new plants but
            also your community and hit up the farmer's market or start a new
            urban/community garden with your new-to-you neighbors!
          </p>
        </Typography>
      </Paper>

      <Paper elevation={1}>
        <Typography variant="h4" gutterBottom className={classes.aboutHeader}>
          the team
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
        >
          Brandon Maxwell
        </Typography>
        <Typography gutterBottom variant="body2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
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

        <br />
        <br />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
        >
          Felicia Wootton
        </Typography>
        <Typography gutterBottom variant="body2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
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
        <br />
        <br />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
        >
          Matt Goad
        </Typography>
        <Typography gutterBottom variant="body2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
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
        <br />
        <br />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
        >
          Pam Hsu
        </Typography>
        <Typography gutterBottom variant="body2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
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
        <br />
        <br />
        <Typography
          variant="h6"
          gutterBottom
          className={classes.teamMemberName}
        >
          Riheel Hamoande
        </Typography>
        <Typography gutterBottom variant="body2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
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
      </Paper>
    </div>
  );
}
