import { reqStreams, reqOneStream, } from './streamActions';
import { reqVideos } from './videoAction';
/*>>>>>>=============================================<<<<<<*/

export const boundAllStreams = (nextState, replaceState) => reqStreams(nextState);
export const boundOneStream = (nextState, replaceState) => reqOneStream(nextState.params.name);

export const boundAllVideosFromChannel = (nextState, replaceState) => reqVideos(nextState.params.name);
