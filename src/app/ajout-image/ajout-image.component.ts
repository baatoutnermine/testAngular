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
  constructor(private imageService: ServiceImageService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  selectedFile: File | null = null;
  description: string = '';

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (this.selectedFile) {
      const imageData = new FormData();
      imageData.append('image', this.selectedFile);
      imageData.append('description', this.description);

      this.imageService.addImage(imageData)
        .subscribe(
          response => {
            // Handle the successful upload response
            console.log('Image uploaded successfully:', response);
          },
          error => {
            // Handle the error response
            console.error('Error uploading image:', error);
          }
        );
    }
  }
}
