import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { OffersComponent } from './pages/offers/offers.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionComponent } from './components/section/section.component';
import { BanerComponent } from './components/baner/baner.component';
import { HomeComponent } from './pages/home/home.component';
import { SubbanerComponent } from './components/subbaner/subbaner.component';
import { CardComponent } from './components/card/card.component';
import { CompanyComponent } from './components/company/company.component';
import { SectionImagesComponent } from './components/section-images/section-images.component';
import { SectionDescriptionComponent } from './components/section-description/section-description.component';
import { GalleryBottomComponent } from './components/gallery-bottom/gallery-bottom.component';
import { SocialListComponent } from './components/social-list/social-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SectionGalleryComponent } from './components/section-gallery/section-gallery.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    OffersComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    BanerComponent,
    HomeComponent,
    SubbanerComponent,
    CardComponent,
    CompanyComponent,
    SectionImagesComponent,
    SectionDescriptionComponent,
    GalleryBottomComponent,
    SocialListComponent,
    ContactDetailsComponent,
    AccordionComponent,
    SectionGalleryComponent,
    FormComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule,
    CommonModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
