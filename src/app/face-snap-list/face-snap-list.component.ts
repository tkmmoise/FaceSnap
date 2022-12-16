import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-sanp.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapService) {}

  ngOnInit() {
    this.facesnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
