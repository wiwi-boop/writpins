// src/components/PinListItem.tsx
import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { Pin } from '../data/pins';

interface PinListItemProps {
  pin: Pin;
}

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
  return (
    <IonItem>
      <IonLabel>
        <h2>{pin.title}</h2>
        <p>{pin.text.substring(0, 30)}...</p>
        <p>{pin.tags.join(', ')}</p>
      </IonLabel>
    </IonItem>
  );
};

export default PinListItem;
