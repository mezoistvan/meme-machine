import { CoinmarketcapService } from './../coinmarketcap.service';
import { Web3Service } from './../web3.service';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() memeId: any;
  memePrice: any;
  memePriceUSD: any;

  constructor(private web3: Web3Service, private cmc: CoinmarketcapService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.web3.contract.subscribe(c => {
      c.priceOf(this.memeId, (_e, r) => {
        const res = this.web3._web3.fromWei(r);
        this.memePrice = res >= 0.01 ? res * 1.25 : 0.01;

        this.cmc.convertEthToUsd(this.memePrice).subscribe((re) => {
          this.memePriceUSD = re;
          this.cd.detectChanges();
        });
        this.cd.detectChanges();
      });
    });
  }

  own() {
    this.web3.contract.subscribe((c) => {
      this.web3.account.subscribe((a) => {
        console.log(a);
        c.appropriate(this.memeId, {from: a, gas: 400000, value: this.web3._web3.toWei(this.memePrice)}, (_e, r) => {
          console.log(r);
          this.cd.detectChanges();
        });
      });
    });
  }

}
