const getModel = state => state.get("resources");

export const getQi = state => getModel(state).getIn(["qi", "value"], 0);
export const getQiMax = state => getModel(state).getIn(["qi","max"], 0);