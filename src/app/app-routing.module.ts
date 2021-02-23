import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component'
import {ExperienceComponent} from './experience/experience.component'
import {ProjectsComponent} from './projects/projects.component'
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, data: {state:  'home'}  
  },
  {
    path: 'about', component: AboutComponent, data: {state:  'about'}  
  },
  {
    path: 'experience', component: ExperienceComponent, data: {state:  'experience'}  
  },
  {
    path: 'projects', component: ProjectsComponent, data: {state:  'projects'}  
  },
  {
    path: 'contact', component: ContactComponent, data: {state:  'contact'}  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
