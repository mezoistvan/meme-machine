import { LoadingService } from './../loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  isLoading: any;

  constructor(private loading: LoadingService) { }

  ngOnInit() {
    this.loading.isLoading.subscribe(val => this.isLoading = val);
  }

}
