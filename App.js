import { Home } from './Home';
import {StatusBar} from 'expo-status-bar';
import { Fragment} from 'react';

export default function App(){
   return (
    <Fragment>
      <StatusBar />
       <Home />
    </Fragment>
   );
}