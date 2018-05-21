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
  url: any;

  constructor(private cd: ChangeDetectorRef, private ar: Router) { }

  ngOnInit() {
    this.ar.events.subscribe(r => {
      if (r instanceof NavigationEnd) {
        this.url = r.url;
        this.cd.detectChanges();
      }
    });
  }

}
