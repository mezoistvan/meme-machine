import { LoadingService } from './../loading.service';
import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  list = [];
  iframeLink: any;
  visibleInfo = false;
  memePrice: any;
  memePriceUSD: any;
  image: any;
  selected: any;
  count: any;
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
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
          c.countOfDeeds((_e, r) => {
              this.count = r;
              for (let i = 0; i < r; i++) {
                this.list.push(i);
              }
              this.shuffleArray(this.list);
              this.list.splice(99);
              this.cd.detectChanges();
          });
      });
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  loadRandomDeeds(numberOfDeeds) {
    this.web3.contract.subscribe((c) => {
      c.deed(Math.floor(Math.random() * 100), (_e, r) => {
        this.list.push(r);
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
    this.visibleInfo = true;
  }

  hideInfo() {
    this.visibleInfo = false;
  }

  goToOriginal() {
    window.open(`http://instagr.am/p/${this.selected[1]}`, '_blank');
  }

  selectMemeId(memeId) {
    this.memeId = memeId;
  }
}
