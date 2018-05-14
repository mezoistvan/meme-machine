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
          this.meme[0] = this.web3._web3.toAscii(this.meme[0]).replace(/\0/g, '');
          this.meme[1] = this.web3._web3.toAscii(this.meme[1]).replace(/\0/g, '');
          console.log(this.meme);
          this.cd.detectChanges();
      });
  });
  }

  loadMemeImage() {
    this.memeObj.emit(this.meme);
  }
}
