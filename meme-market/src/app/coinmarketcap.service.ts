import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinmarketcapService {

  constructor(private http: HttpClient) { }

  convertEthToUsd(ether): Observable<any> {
    return this.http.get(`https://api.coinmarketcap.com/v2/ticker/1027/`).pipe(
      pluck('data', 'quotes', 'USD', 'price'),
      map(r => r as any * ether),
      map(r => r.toString().substring(0, 4))
    );
  }
}
