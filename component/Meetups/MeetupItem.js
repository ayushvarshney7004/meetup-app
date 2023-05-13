import Card from "../Ui/Card";
import classes from "./Meetupitems.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  function ShowDetailhandler() {
    router.push("/" + props.id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={ShowDetailhandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
