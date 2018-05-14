import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient, private loading: LoadingService) { }

  getInstagramImage(shortcode) {
    this.loading.loading();
    return this.http.get(`https://instagram.com/p/${shortcode}/media/?size=l`, {
      responseType: 'blob'
    }).pipe(
      tap(_ => {
        this.loading.notLoading();
      })
    );
  }

  getInstagramLink(shortcode) {
    return this.http.get(`https://api.instagram.com/oembed?url=http://instagr.am/p/${shortcode}/`).pipe(
      tap(r => console.log(r))
    );
  }

  getId(link) {
    return link.split('/')[4];
  }
}
