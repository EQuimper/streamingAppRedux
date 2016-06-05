import { reqStreams, reqOneStream, } from './streamActions';
import { reqVideos } from './videoAction';
import { reqAllGames } from './gameActions';
/*>>>>>>=============================================<<<<<<*/

export const boundAllStreams = (nextState, replaceState) => reqStreams(nextState.params.game);
export const boundOneStream = (nextState, replaceState) => reqOneStream(nextState.params.name);

export const boundAllVideosFromChannel = (nextState, replaceState) => reqVideos(nextState.params.name);

export const boundAllGames = (nextState, replaceState) => reqAllGames(nextState);
