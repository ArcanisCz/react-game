import React from 'react';
import {Provider} from "react-redux"

import app from "./screen";
import {createStore} from "./state";

const store = createStore(app.router);

export default App = () => (
    <Provider store={store}>
        <app.Root />
    </Provider>
);
