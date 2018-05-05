import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hex2a } from '../util/hextoa';
import { tap } from 'rxjs/operators';

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

  constructor(
    private web3: Web3Service,
    private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private cmc: CoinmarketcapService) {}

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
    this.iframeLink = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `https://www.instagram.com/p/${hex2a(meme[1]).split('/')[4]}/embed`);

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

}
