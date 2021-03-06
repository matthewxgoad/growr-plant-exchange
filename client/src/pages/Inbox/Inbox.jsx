import NavBar from "../../components/NavBar";
import "./Inbox.css";
import InboxMenu from "../../components/InboxMenu";
import MessageBox from "../../components/MessageBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
}));

export default function Inbox(props) {
  const classes = useStyles();

  return (
    <>
      <NavBar page="inbox" />
      <div className={classes.root}>
        <InboxMenu />
        <MessageBox />
      </div>
    </>
  );
}
