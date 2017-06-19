import {fromJS} from "immutable";

export default (router) => {
    const initialState = fromJS(router.getStateForAction(router.getActionForPathAndParams('QiScreen')));
    return (state = initialState, action) => state.merge(router.getStateForAction(action, state.toJS()));
}