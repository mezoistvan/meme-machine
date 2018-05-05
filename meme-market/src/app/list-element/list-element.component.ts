import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input() memeId: any;
  @Output() memeObj = new EventEmitter();
  meme: any;

  constructor(private web3: Web3Service, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.web3.contract.subscribe((c) => {
      c.deed(this.memeId, (_e, r) => {
          this.meme = r;
          /* this.meme[4] = format(new Date(r[4]*1000), 'MM/DD/YYYY HH:MM'); */
          this.cd.detectChanges();
      });
  });
  }

  loadMemeImage() {
    this.memeObj.emit(this.meme);
  }
}
