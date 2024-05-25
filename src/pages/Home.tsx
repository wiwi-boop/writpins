import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import PinListItem from '../components/PinListItem';
import CreatePinForm from '../components/CreatePinForm';
import { Pin, pins } from '../data/pins';

const Home: React.FC = () => {
  const [pinList, setPinList] = useState<Pin[]>(pins);

  const handleCreatePin = (newPin: Pin) => {
    setPinList([newPin, ...pinList]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Writ'Pins</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {pinList.map(pin => (
            <PinListItem key={pin.id} pin={pin} />
          ))}
        </IonList>
        <CreatePinForm onCreate={handleCreatePin} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
