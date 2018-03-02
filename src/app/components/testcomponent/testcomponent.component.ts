import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
