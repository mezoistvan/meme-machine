import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }

  getInstagramImage(shortcode) {
    return this.http.get(`https://instagram.com/p/${shortcode}/media/?size=l`, {
      responseType: 'blob'
    }).pipe(
      tap(r => console.log(r))
    );
  }

  getInstagramLink(shortcode) {
    return this.http.get(`https://api.instagram.com/oembed?url=http://instagr.am/p/${shortcode}/`).pipe(
      tap(r => console.log(r))
    );
  }
}
