import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-browse2',
  templateUrl: './browse2.component.html',
  styleUrls: ['./browse2.component.css']
})
export class Browse2Component implements OnInit {
  list = [];
  listShown: any;
  count: any;

  constructor(
    private web3: Web3Service,
    private cd: ChangeDetectorRef,
  ) { }

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
              this.listShown = this.list.concat(this.list).concat(this.list)
                .concat(this.list).concat(this.list).concat(this.list).concat(this.list);
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

}
