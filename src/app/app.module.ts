import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RouterModule } from '@angular/router';

const routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'setup',
        component: SetupPageComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomePageComponent,
    SetupPageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
