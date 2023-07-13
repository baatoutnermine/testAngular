import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Image } from './image';
@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {
  accessKey: string = 'sbVKKcD1AiYaaUe-09gwcro4_6VxWW9QOgLXlrCb9CI';

  constructor(private client: HttpClient) { }
host="http://localhost:3000/images"
  // getImages(page: number, perPage: number) {
  //   const apiUrl = `https://api.unsplash.com/photos/?page=${page}&per_page=${perPage}&client_id=${this.accessKey}`;
  //   return this.http.get<any[]>(apiUrl);
  // }


  public getAllImages(page: number, perPage: number):Observable<Image[]>{
   const host="http://localhost:3000/images/?page=${page}&per_page=${perPage}"
    return this.client.get<Image[]>(host);
  }
  getImageById(productId: string): Observable<Image> {
    const url = `${this.host}/${productId}`;
    return this.client.get<Image>(url);
  }
  public addImage(image:Image):Observable<any> {
    return this.client.post<Image>(this.host,image);
  }



  public deleteImage(id: number): Observable<any> {
    const url = `${this.host}/${id}`;
    return this.client.delete(url);
  }
  // uploadImage(url: string, description: string) {
  //   const apiUrl = 'https://api.unsplash.com/photos';
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessKey}`);

  //   const newImage = {
  //     alt_description: description,
  //     urls: {
  //       regular: url
  //     }
  //   };

  //   return this.http.post<any>(apiUrl, newImage, { headers });
  // }

  // deleteImage(imageId: string) {
  //   const apiUrl = `https://api.unsplash.com/photos/${imageId}`;
  //   const headers = new HttpHeaders().set('Authorization', `Client-ID ${this.accessKey}`);

  //   return this.http.delete(apiUrl, { headers });
  // }
}
