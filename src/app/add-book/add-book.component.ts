import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());




}
