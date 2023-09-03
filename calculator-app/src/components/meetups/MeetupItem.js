import { useContext } from "react";
import { Card } from "../ui/Card";
import classes from "./Meetup.module.css";
import { FavoritesContext } from "../../store/favorites-context";

export const MeetupItem = (props) => {
  const favoriteContext = useContext(FavoritesContext);
  console.log(props);
  const itemIsFavorite = favoriteContext.isFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    console.log(props);
    if (itemIsFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      favoriteContext.addFavorite(props);
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Un-Favorite" : "Add Favorite"}</button>
        </div>
      </li>
    </Card>
  );
};
