import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth, login } from '../auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await login(email, password);
      setAuth({ loggedIn: true, user: email });
      history.push('/home');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Connexion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonInput
          placeholder="Email"
          value={email}
          onIonChange={e => setEmail(e.detail.value!)}
        />
        <IonInput
          type="password"
          placeholder="Mot de passe"
          value={password}
          onIonChange={e => setPassword(e.detail.value!)}
        />
        <IonButton expand="block" onClick={handleLogin}>Se connecter</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
