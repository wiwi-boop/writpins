import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home'; // Assurez-vous que le chemin est correct
import ViewPin from './pages/ViewPin'; // Assurez-vous que le chemin est correct

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <IonRouterOutlet>
          <Switch>
            <Route path="/pin/:id" component={ViewPin} />
            <Route path="/" component={Home} />
          </Switch>
        </IonRouterOutlet>
      </Router>
    </IonApp>
  );
};

export default App;
