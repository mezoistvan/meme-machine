import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = new BehaviorSubject<boolean>(false);

  constructor() { }

  loading() {
    this.isLoading.next(true);
  }

  notLoading() {
    this.isLoading.next(false);
  }
}
