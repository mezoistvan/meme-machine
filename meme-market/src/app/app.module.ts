import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './footer/footer.component';
import { OwnedComponent } from './owned/owned.component';
import { ListElementComponent } from './list-element/list-element.component';
import { InfoBoxComponent } from './info-box/info-box.component';

const routes: Routes = [
  { path: '', redirectTo: 'browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseComponent },
  { path: 'create', component: CreateComponent },
  { path: 'owned', component: OwnedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseComponent,
    CreateComponent,
    FooterComponent,
    OwnedComponent,
    ListElementComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
