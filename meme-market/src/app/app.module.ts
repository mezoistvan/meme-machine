import { OldAbstractBoxComponent } from './old-abstract-box/abstract-box.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
import { BlogComponent } from './blog/blog.component';
import { LoadingComponent } from './loading/loading.component';
import { PopupComponent } from './popup/popup.component';
import { Browse2Component } from './browse2/browse2.component';
import { MemeComponent } from './meme/meme.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'browse', component: Browse2Component },
  { path: 'create', component: CreateComponent },
  { path: 'created', component: CreatedComponent },
  { path: 'blog', component: BlogComponent },
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
    BlogComponent,
    LoadingComponent,
    PopupComponent,
    OldAbstractBoxComponent,
    Browse2Component,
    MemeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled', useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: initWeb3, deps: [Web3Service], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
