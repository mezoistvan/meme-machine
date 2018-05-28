import { Router } from '@angular/router';
import { CoinmarketcapService } from './../coinmarketcap.service';
import { LoadingService } from './../loading.service';
import { Web3Service } from './../web3.service';
import { DomSanitizer } from '@angular/platform-browser';
import { InstagramService } from './../instagram.service';
import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, Renderer2, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() memeId: any;

  @ViewChild('imageEl', {read: ElementRef}) imageEl: ElementRef;
  meme: any;
  image: any;
  memePrice: any;
  memePriceUSD: any;
  showBox = false;

  constructor(private ig: InstagramService, private domSanitizer: DomSanitizer,
    private web3: Web3Service, private cd: ChangeDetectorRef, private loading: LoadingService,
    private el: ElementRef, private r2: Renderer2, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.cd.detectChanges();

    this.web3.contract.subscribe((c) => {
      c.deed(this.memeId, (_e, r) => {
          this.meme = r;
          this.meme[0] = this.web3._web3.toAscii(this.meme[0]).replace(/\0/g, '');
          this.meme[1] = this.web3._web3.toAscii(this.meme[1]).replace(/\0/g, '');
          this.cd.detectChanges();

          this.ig.getInstagramImage(this.meme[1]).subscribe((img) => {
            this.image = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
            this.loading.notLoading();
            this.cd.detectChanges();
          });

          this.memePrice = this.web3._web3.fromWei(this.meme[3]);

          this.cd.detectChanges();
      });
  });
  }

  bringToTop() {
    this.showBox = true;
    this.cd.detectChanges();
  }

  goBack() {
    this.showBox = false;
    this.cd.detectChanges();
  }

  own() {
    this.zone.run(() => {
      this.router.navigate([{ outlets: { popup: [+this.memeId] } }]);
    });
  }
}
