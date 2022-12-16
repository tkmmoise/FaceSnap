import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-sanp.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 100,
      title: 'Watch Dogs 2',
      description: 'Meilleur jeux que j ai joue',
      imageUrl: 'https://wallpaper.dog/large/20520078.jpg',
      createdDate: new Date(),
      snaps: 140,
      location: 'San franscico'
    },
    {
      id: 101,
      title: 'God of war',
      description: 'Meilleur histoire pour un jeu video',
      imageUrl: 'https://wallpaper.dog/large/17200565.jpg',
      createdDate: new Date(),
      snaps: 8
    },
    {
      id: 102,
      title: 'Far cry 6',
      description: 'Meilleur jeux open world',
      imageUrl: 'https://wallpaper.dog/large/20458417.jpg',
      createdDate: new Date(),
      snaps: 250,
      location: 'Mexico'
    }
  ]

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnap(id: number): FaceSnap {
    let faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!faceSnap) {
      throw new Error('Facesnap not found');
    }else{
      return faceSnap;
    }
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    let faceSnap = this.getFaceSnap(id);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
