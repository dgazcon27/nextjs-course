import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetup) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorite) =>
      prevUserFavorite.concat(favoriteMeetup)
    );
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevUserFavorite) =>
      prevUserFavorite.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId) =>
    userFavorites.some((meetup) => meetup.id === meetupId);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
