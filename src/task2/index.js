import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import initList from './components/initList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToDoApp toDoList={initList} />, document.getElementById('root'));
registerServiceWorker();