"use client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store,{persistor} from '../store/index'


export default function ReduxProvider({ children }) {
  return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
    {children}
            </PersistGate>
    </Provider>;
}

//for logoout
// import { persistor } from './store/store';
// const handleLogout = () => {
//     persistor.purge(); // Clears persisted state
//     dispatch(clearUser()); // Clear Redux user state
// };
