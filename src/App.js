import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Contenedor } from './components/contenedor/Contenedor';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
    
      <Contenedor/>
    
    </Provider>
  );
}


