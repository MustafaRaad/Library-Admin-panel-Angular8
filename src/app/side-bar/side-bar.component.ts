import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
})
export class SideBarComponent implements OnInit {
  options: FormGroup;
  location: Location;
  pageName: string;
  constructor(fb: FormBuilder, location: Location) {
    //--------Current Location for page name
    this.location = location;

    this.pageName = this.location.path();

    //--------Side-bar
    this.options = fb.group({
      fixed: true,
      top: 44,
    });

  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
