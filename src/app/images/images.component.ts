import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceImageService } from '../service-image.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  page: number = 1;
  perPage: number = 10;
  showModal: boolean = false;
  selectedImage: any;

  constructor(private service: ServiceImageService) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  // getImages(): void {
  //   this.unsplashService.getImages(this.page, this.perPage).subscribe(data => {
  //     this.images = data;
  //   });
  // }

  // showDetails(image: any): void {
  //   this.selectedImage = image;
  //   this.showModal = true;
  // }

  // hideDetails(): void {
  //   this.showModal = false;
  // }
  nextPage(): void {
    this.page++;
    this.getAllImages();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getAllImages();
    }
  }
  // deleteImage(imageId: string): void {
  //   this.unsplashService.deleteImage(imageId).subscribe(() => {

  //     this.images = this.images.filter(image => image.id !== imageId);
  //   });
  // }
  public getAllImages()
  { this.service.getAllImages(this.page, this.perPage).subscribe(data=>{
    this.images=data;
    console.log(this.images)

  })

  }
}

