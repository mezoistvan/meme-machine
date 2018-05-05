import { Web3Service } from './../web3.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() memePrice: any;
  @Input() memePriceUSD: any;

  constructor() { }

  ngOnInit() {
  }

}
