import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
