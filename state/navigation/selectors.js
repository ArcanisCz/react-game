import {Map} from "immutable";

const getModel = state => state.get("nav");

export const getNav = state => getModel(state) || Map();