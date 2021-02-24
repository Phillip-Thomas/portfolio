import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgParticlesModule } from "ng-particles";
import {AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {DemoMaterialModule} from './material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NgwWowModule } from 'ngx-wow';
import { HoverClassDirective } from './hover.directive';
import { ProjectListComponent } from './project-list/project-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';


const  firebaseConfig = {
  apiKey: "AIzaSyBcvj1xmpI_Vs6dPtHNDuPOosDll-9h4aI",
  authDomain: "portfolio-9943f.firebaseapp.com",
  projectId: "portfolio-9943f",
  storageBucket: "portfolio-9943f.appspot.com",
  messagingSenderId: "242700734550",
  appId: "1:242700734550:web:a422237e94b82dd668ebf7",
  measurementId: "G-ZFE62H8YBC"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    HoverClassDirective,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    NgParticlesModule,
    NgbModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgwWowModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
