import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url: any;

  constructor(private ar: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.ar.events.subscribe(r => {
      if (r instanceof NavigationEnd) {
        this.url = r.url;
        this.cd.detectChanges();
      }
    });
  }

}
