// src/data/pins.ts
export interface Pin {
    id: number;
    title: string;
    text: string;
    source: string;
    tags: string[];
    date: Date;
  }
  
  export const pins: Pin[] = [
    {
      id: 1,
      title: 'Exemple de titre',
      text: 'Ceci est un exemple de texte pour une épingle.',
      source: 'Source de l\'épingle',
      tags: ['exemple', 'épingler'],
      date: new Date(),
    },
  ];
  