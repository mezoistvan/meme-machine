import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  createdList = [];

  constructor(private web3: Web3Service, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
          c.deedsOf(a, (_e, r) => {
              this.createdList = r;
              this.cd.detectChanges();
          });
      });
    });
  }

}
