import { LoadingService } from './../loading.service';
import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-owned',
  templateUrl: './owned.component.html',
  styleUrls: ['./owned.component.css']
})
export class OwnedComponent implements OnInit {
  list: any;
  iframeLink: any;
  visibleInfo = false;
  memePrice: any;
  memePriceUSD: any;
  image: any;
  selected: any;
  memeId: any;

  constructor(
    private web3: Web3Service,
    private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private cmc: CoinmarketcapService,
    private ig: InstagramService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.loading.loading();
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
          c.deedsOf(a, (_e, r) => {
              this.list = r;
              this.loading.notLoading();
              this.cd.detectChanges();
          });
      });
    });
  }

  onMemeObj(meme) {
    this.selected = meme;

    this.ig.getInstagramImage(meme[1]).subscribe((img) => {
      this.image = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
      this.loading.notLoading();
      this.cd.detectChanges();
    });

    this.memePrice = this.web3._web3.fromWei(meme[3]);

    this.cmc.convertEthToUsd(this.memePrice).subscribe((r) => {
      this.memePriceUSD = r;
    });
    this.cd.detectChanges();
  }

  showInfo() {
    // this.visibleInfo = true;
  }

  hideInfo() {
    // this.visibleInfo = false;
  }

  goToOriginal() {
    window.open(`http://instagr.am/p/${this.selected[1]}`, '_blank');
  }

  selectMemeId(memeId) {
    this.memeId = memeId;
  }
}
