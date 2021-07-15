import React from "react";
import "./LoginForm.css";
import {
  Grid,
  Paper,
  TextField,
  Button,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import Link from "@material-ui/core/Link";

const headerColor = green[600];

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "0px",
    paddingBottom: "30px",
    paddingLeft: "100px",
    paddingRight: "100px",
    width: 600,
    margin: "20px auto",
  },
  header: {
    margin: "0",
    fontFamily: "Dancing Script",
    color: headerColor,
    fontSize: "70px",
  },
  textField: {
    marginTop: "10px",
  },
  loginBtn: {
    margin: "20px 0px",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bolder",
  },
}));

export default function SignUpForm() {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={20} className={classes.paper}>
        <Grid align="center">
          <h2 className={classes.header}>growr</h2>
        </Grid>
        <form>
          <TextField
            size="small"
            className={classes.textField}
            variant="outlined"
            required
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            size="small"
            className={classes.textField}
            variant="outlined"
            type="password"
            required
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <div className={classes.loginBtn}>
            <Button type="submit" variant="contained" color="primary">
              Log In
            </Button>
          </div>
        </form>
        <Grid align="center">
          <Link className={classes.link} component={Link} href="/signup">
            Don't have an account? Click here to sign up
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}
