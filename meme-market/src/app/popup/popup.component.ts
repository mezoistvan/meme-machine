import { PopupService } from './../popup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private popup: PopupService) { }

  ngOnInit() {
  }

  close() {
    this.popup.hide();
  }

}
