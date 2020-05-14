import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import {EnthusiasmAction} from './actions';
import Hello from "./containers/Hello";
import { Provider } from 'react-redux';
import * as ReactDOM  from 'react-dom';
import React from 'react';

// @ts-ignore
const store = createStore<StoreState, EnthusiasmAction, undefined, undefined>(enthusiasm, {
    languageName: 'TypeScript',
    enthusiasmLevel: 1,
});

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);