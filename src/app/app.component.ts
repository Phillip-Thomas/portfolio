import { Component } from '@angular/core';
import  {rotateCubeToLeft, rotateCubeToRight, rotateCubeToTop, rotateCubeToBottom, rotateRoomToTop}  from  "ngx-router-animations";
import { trigger, state, transition, style, animate, keyframes, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('homeToAbout',  [ transition('home <=> about', useAnimation(rotateCubeToLeft))]),
    trigger('homeToProjects',  [ transition('home <=> projects', useAnimation(rotateCubeToRight))]),
    trigger('homeToContact',  [ transition('home <=> contact', useAnimation(rotateRoomToTop))]),
    trigger('aboutToProjects',  [ transition('about <=> projects', useAnimation(rotateCubeToTop))]),
    trigger('aboutToContact',  [ transition('about <=> contact', useAnimation(rotateRoomToTop))]),
    trigger('projectsToContact',  [ transition('projects <=> contact', useAnimation(rotateRoomToTop))]),
  
  ]
})
export class AppComponent {
  title = 'portfolio';
  

  getState(outlet: any)  {
		return outlet.activatedRouteData.state;
	}

}
