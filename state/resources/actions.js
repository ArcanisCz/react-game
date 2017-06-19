const NAME = "resources";

export const ADD_QI = `${NAME}/ADD_QI`;
export const ADD_MAX_QI = `${NAME}/ADD_MAX_QI`;

export const addQi = () => ({
    type: ADD_QI,
});

export const addMaxQi = () => ({
    type: ADD_MAX_QI,
});