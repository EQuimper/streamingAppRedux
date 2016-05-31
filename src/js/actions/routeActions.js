import {
	reqStreams,
	reqOneStream
} from './streamActions';
/*>>>>>>=============================================<<<<<<*/
export const boundAllStreams = (nextState, replaceState) => reqStreams(nextState);
export const boundOneStream = (nextState, replaceState) => reqOneStream(nextState.params.name);