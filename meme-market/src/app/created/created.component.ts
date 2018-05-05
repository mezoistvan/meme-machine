import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hex2a } from '../util/hextoa';
import { tap } from 'rxjs/operators';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent implements OnInit {
  list: any;
  iframeLink: any;
  visibleInfo = false;
  memePrice: any;
  memePriceUSD: any;
  image: any;
  selected: any;

  constructor(
    private web3: Web3Service,
    private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private cmc: CoinmarketcapService,
    private ig: InstagramService
  ) {}

  ngOnInit() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
          c.deedsOf(a, (_e, r) => {
              this.list = r;
              this.cd.detectChanges();
          });
      });
    });
  }

  onMemeObj(meme) {
    this.selected = meme;

    this.ig.getInstagramImage(hex2a(meme[1]).split('/')[4]).subscribe((img) => {
      this.image = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
      this.cd.detectChanges();
    });

    this.memePrice = this.web3._web3.fromWei(meme[3]);

    this.cmc.convertEthToUsd(this.memePrice).subscribe((r) => {
      this.memePriceUSD = r;
    });
    this.cd.detectChanges();
  }

  showInfo() {
    this.visibleInfo = true;
  }

  hideInfo() {
    this.visibleInfo = false;
  }

  goToOriginal() {
    window.location.href = (`http://instagr.am/p/${hex2a(this.selected[1]).split('/')[4]}`);
  }
}
