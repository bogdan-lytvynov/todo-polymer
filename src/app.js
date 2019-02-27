import('./todo-app');
import {Router} from '@vaadin/router';

const router = new Router(
  document.getElementById('root'),
  {baseUrl: '/components/todo-polymer/'}
);
router.setRoutes([
  {path: '/', component: 'todo-app'},
  {path: '/filter', component: 'todo-app'}
]);
