import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from './../loading.service';
import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { InstagramService } from '../instagram.service';


@Component({
  selector: 'app-meme-details',
  templateUrl: './meme-details.component.html',
  styleUrls: ['./meme-details.component.css']
})
export class MemeDetailsComponent implements OnInit {
  list = [];
  visibleInfo = false;
  memePrice: any;
  memePriceUSD: any;
  image: any;
  selected: any;
  count: any;
  memeId: any;
  meme: any;

  constructor(
    private web3: Web3Service,
    private cd: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private cmc: CoinmarketcapService,
    private ig: InstagramService,
    private loading: LoadingService,
    private activatedRoute: ActivatedRoute, private zone: NgZone, private router: Router) { }

  ngOnInit() {
    this.memeId = this.activatedRoute.snapshot.params.id;

    this.web3.contract.subscribe((c) => {
      c.deed(this.memeId, (_e, r) => {
        this.meme = r;
        this.meme[0] = this.web3._web3.toAscii(this.meme[0]).replace(/\0/g, '');
        this.meme[1] = this.web3._web3.toAscii(this.meme[1]).replace(/\0/g, '');


        this.ig.getInstagramImage(this.meme[1]).subscribe((img) => {
          this.image = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
          this.loading.notLoading();
          this.cd.detectChanges();
        });

        this.memePrice = this.web3._web3.fromWei(this.meme[3]);

        this.cmc.convertEthToUsd(this.memePrice).subscribe((rr) => {
          this.memePriceUSD = rr;
        });
        this.cd.detectChanges();
      });
    });

  }

  showInfo() {
    this.visibleInfo = true;
  }

  hideInfo() {
    this.visibleInfo = false;
  }

  goToOriginal() {
    window.open(`http://instagr.am/p/${this.meme[1]}`, '_blank');
  }

  close() {
    // this.zone.run(() => {
      this.router.navigate([{ outlets: { popup: null } }]);
    // });
  }

  own() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
        c.appropriate(this.memeId, {from: a, gas: 400000, value: this.web3._web3.toWei(this.memePrice)}, (_e, r) => {
          this.cd.detectChanges();
        });
      });
    });
  }

}
