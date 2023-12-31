import { useContext } from "react";
import { FavoritesContext } from "../store/favorites-context";
import { MeetupList } from "../components/meetups/MeetupList";

export const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <h3>Seems there are no favorite here</h3>;
  } else {
    content = <MeetupList meetupList={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};
