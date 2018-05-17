import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  createdList = [];
  url: any;

  constructor(private web3: Web3Service, private cd: ChangeDetectorRef, private ar: Router) { }

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
