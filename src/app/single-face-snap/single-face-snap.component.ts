import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-sanp.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    const faceSnapId: number = +this.router.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnap(faceSnapId);
    this.buttonText = 'Oh, snap!';
  }

  onAddSnap() {
    if (this.buttonText === "Oh, snap!") {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unsnap!"
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh, snap!"
    }
  };
}
