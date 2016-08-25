import React from 'react';
import ReactDom from 'react-dom';
import todoAPi from './util/todo_api_util';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {

  const rootEl = document.getElementById("content");
  const store = configureStore();
  window.store = configureStore();
  console.log(store.getState());
  console.log(allTodos(window.store.getState()));
  ReactDom.render( Root(store), rootEl);
});
