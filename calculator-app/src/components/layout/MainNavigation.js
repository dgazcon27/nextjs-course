import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites-context";

export const MainNavigation = () => {

  const favoritesCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div>
        <div className={classes.logo}>React Meet Up</div>
        <nav>
          <ul>
            <li>
              <Link to="/favorites">Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
            </li>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="new-meetup">New Meet up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
