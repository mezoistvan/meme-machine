import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url: any;
  createdList = [];

  constructor(private ar: Router, private cd: ChangeDetectorRef, private web3: Web3Service) { }

  ngOnInit() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
        c.deedsOf(a, (_e, r) => {
          this.createdList = r;
          this.cd.detectChanges();
       });

        this.ar.events.subscribe(r => {
          if (r instanceof NavigationEnd) {
            c.deedsOf(a, (_e, r) => {
              this.createdList = r;
              this.cd.detectChanges();
           });
          }
        });
      });
    });

    this.ar.events.subscribe(r => {
      if (r instanceof NavigationEnd) {
        this.url = r.url;
        this.cd.detectChanges();
      }
    });
  }

}
