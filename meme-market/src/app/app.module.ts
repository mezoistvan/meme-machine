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

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateComponent },
  { path: 'created', component: CreatedComponent },
  { path: 'owned', component: OwnedComponent }
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
    CreatedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'}),
    HttpClientModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: initWeb3, deps: [Web3Service], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
