import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abstract-box',
  templateUrl: './abstract-box.component.html',
  styleUrls: ['./abstract-box.component.css']
})
export class AbstractBoxComponent implements OnInit {

  @Input() gradient = true;

  constructor() { }

  ngOnInit() {
  }

}
