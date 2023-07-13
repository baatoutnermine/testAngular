import { Component, OnInit } from '@angular/core';
import { ServiceImageService } from '../service-image.service';

@Component({
  selector: 'app-ajout-image',
  templateUrl: './ajout-image.component.html',
  styleUrls: ['./ajout-image.component.css']
})
export class AjoutImageComponent implements OnInit {
  images: any[] = [];
  newImage: any = {
    url: '',
    description: ''
  };
  constructor(private unsplashService: ServiceImageService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // addImage(): void {
  //   this.unsplashService.uploadImage(this.newImage.url, this.newImage.description)
  //     .subscribe(newImage => {
  //       this.images.push(newImage);
  //       this.newImage.url = '';
  //       this.newImage.description = '';
  //     });
  // }
}
