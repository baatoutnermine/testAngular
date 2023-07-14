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

  constructor(private Service: ServiceImageService) { }


  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.Service.getImage().subscribe(data => {
      this.images = data;
    });
  }

  nextPage(): void {
    this.page++;
    this.getImages();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.getImages();
    }
  }

  showDetails(image: any): void {

    this.selectedImage = image;
    console.log(this.selectedImage)
    this.showModal = true;
  }

  hideDetails(): void {
    this.showModal = false;
  }

}

