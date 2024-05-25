import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonTextarea, IonButton } from '@ionic/react';
import { Pin } from '../data/pins';

interface CreatePinFormProps {
  onCreate: (pin: Pin) => void;
}

const CreatePinForm: React.FC<CreatePinFormProps> = ({ onCreate }) => {
  const [newPin, setNewPin] = useState({
    title: '',
    text: '',
    source: '',
    tags: '',
  });

  const handleCreatePin = () => {
    const newPinData = {
      ...newPin,
      id: Date.now(),
      tags: newPin.tags.split(',').map(tag => tag.trim()),
      date: new Date(),
    };
    onCreate(newPinData);
    setNewPin({ title: '', text: '', source: '', tags: '' });
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Nouvelle Épingle</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonInput
          placeholder="Titre"
          value={newPin.title}
          onIonChange={e => setNewPin({ ...newPin, title: e.detail.value! })}
        />
        <IonTextarea
          placeholder="Texte"
          value={newPin.text}
          onIonChange={e => setNewPin({ ...newPin, text: e.detail.value! })}
        />
        <IonInput
          placeholder="Source"
          value={newPin.source}
          onIonChange={e => setNewPin({ ...newPin, source: e.detail.value! })}
        />
        <IonInput
          placeholder="Tags (séparés par des virgules)"
          value={newPin.tags}
          onIonChange={e => setNewPin({ ...newPin, tags: e.detail.value! })}
        />
        <IonButton expand="block" onClick={handleCreatePin}>Créer</IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default CreatePinForm;
