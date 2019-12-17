import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class SideBarComponent {
  options: FormGroup;
  location:Location;
  books=false;
  pageName:string;
  constructor(fb: FormBuilder,location:Location) {
//--------Current Location for page name
this.location = location; 

this.pageName = this.location.path();

//--------Side-bar
this.options = fb.group({
  fixed: true,
  top: 47,
});
}
shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
