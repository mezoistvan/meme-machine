import { Web3Service } from './../web3.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  link: any;
  id: any;
  image: any;

  constructor(private ig: InstagramService, private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer, private web3: Web3Service) { }

  ngOnInit() {
  }

  parseLink() {
    if (this.link.includes('instagram')) {
      this.id = this.link.split('/')[4];
    }
    if (this.id) {
      this.ig.getInstagramImage(this.id).subscribe((img) => {
        this.image = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
        this.cd.detectChanges();
      });
    }
  }

  create() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
        c.create(this.link, this.link, a,  {gas: 400000}, (_e, r) => {
          console.log('your meme is being created:', r);
          this.cd.detectChanges();
        });
      });
    });
  }

  // redditmedia imgur instagram
}
