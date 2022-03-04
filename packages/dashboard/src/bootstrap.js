import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// function invoked in container to start up the app
// default history is only gonna be provided in dev env
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
