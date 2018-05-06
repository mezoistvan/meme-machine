import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './footer/footer.component';
import { OwnedComponent } from './owned/owned.component';
import { ListElementComponent } from './list-element/list-element.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { CreatedComponent } from './created/created.component';
import { Web3Service } from './web3.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AbstractBoxComponent } from './abstract-box/abstract-box.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateComponent },
  { path: 'created', component: CreatedComponent },
  { path: 'news', component: NewsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'owned', component: OwnedComponent },
  { path: '**', component: WelcomeComponent }
];

export function initWeb3(web3: Web3Service) {
  return () => {
    return web3.init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseComponent,
    CreateComponent,
    FooterComponent,
    OwnedComponent,
    ListElementComponent,
    InfoBoxComponent,
    CreatedComponent,
    WelcomeComponent,
    AbstractBoxComponent,
    FaqComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled', useHash: true}),
    HttpClientModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: initWeb3, deps: [Web3Service], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
