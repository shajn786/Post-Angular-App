import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewAllPostComponent } from './view-all-post/view-all-post.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes:Routes=[
  {
    path:"",component:AddPostComponent
  },
  {
    path:"viewall",component:ViewAllPostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewAllPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
