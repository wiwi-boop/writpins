import React from 'react';
import { useParams } from 'react-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { pins } from '../data/pins';

const ViewPin: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pin = pins.find(p => p.id === parseInt(id, 10));

  if (!pin) {
    return <div>Pin not found</div>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pin.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>{pin.title}</h2>
        <p>{pin.text}</p>
        <p>{pin.source}</p>
        <p>{pin.tags.join(', ')}</p>
      </IonContent>
    </IonPage>
  );
};

export default ViewPin;
