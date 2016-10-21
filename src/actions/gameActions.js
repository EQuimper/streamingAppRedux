import request from "superagent";
import * as types from "../constants/";
import config from '../config';

export const reqAllGames = games => {

  const promise = new Promise((resolve, reject) => {
    request
      .get(`${config.ROOT_URL}/games/top?limit=24&offset=0&client_id=${config.API_KEY}`)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body.top);
        }
      });
  });

  return {
    type:    types.RECEIVE_ALL_GAMES,
    payload: promise
  };

};

export const addGameToFavorite = game => {

  let gameFavorites = JSON.parse(localStorage.getItem('gameFavorites'));

  if (gameFavorites) {
    gameFavorites.push(game);
  } else {
    gameFavorites = [ game ];
  }
  localStorage.setItem('gameFavorites', JSON.stringify(gameFavorites));

  return {
    type: types.ADD_GAME_TO_FAVORITE,
    game
  };

};

export const removeGameFromFavorite = game => {

  let gameFavorites = JSON.parse(localStorage.getItem('gameFavorites'));

  if (gameFavorites) {
    gameFavorites = gameFavorites.filter((gameFavorites) => gameFavorites.game._id !== game.game._id);
    localStorage.setItem('gameFavorites', JSON.stringify(gameFavorites));
  }

  return {
    type: types.REMOVE_GAME_FROM_FAVORITE,
    game
  };

};

export const removeGameFromListFavorite = gameId => {

  let gameFavorites = JSON.parse(localStorage.getItem('gameFavorites'));

  if (gameFavorites) {
    gameFavorites = gameFavorites.filter((gameFavorites) => gameFavorites.game._id !== gameId);
    localStorage.setItem('gameFavorites', JSON.stringify(gameFavorites));
  }

  return {
    type: types.REMOVE_GAME_FROM_LIST_FAVORITE,
    gameId
  };

};
