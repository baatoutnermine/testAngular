import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Image } from './image';
@Injectable({
  providedIn: 'root'
})
export class ServiceImageService {
  token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwODM5Njg5LCJpYXQiOjE2ODkzMDM2ODksImp0aSI6ImZlNzdmYmI4NzU2MDRiOTI4NTFhNmNiMDU4MmRkODE2IiwidXNlcl9pZCI6NX0.7zwVb-Pa91TtkKgp3U5hYWVUZfr2594T2gl7O2upOZo';
  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  getImage() {
    const apiUrl = `${this.apiUrl}/image/listeImage`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any[]>(apiUrl,{headers});
  }

  // public getAllImages(page: number, perPage: number):Observable<Image[]>{
  //  const host="http://localhost:3000/images"
  //   return this.client.get<Image[]>(host);
  // }

  // public addImage(image:Image):Observable<any> {
  //   return this.client.post<Image>(this.host,image);
  // }



  public deleteImage(id: number): Observable<any> {
    const url = `http://localhost:8000/image/deleteimage/${id}`;
    return this.http.delete(url);
  }
  
  addImage(imageData: FormData): Observable<any> {
    const apiUrl = `${this.apiUrl}/image/createimage`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post(apiUrl, imageData, { headers });
  }


  findImageByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/image/findimage/${categoryId}/`);
  }
}
