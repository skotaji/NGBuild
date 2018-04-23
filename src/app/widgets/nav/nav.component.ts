import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var elem = document.querySelector('.dropdown-trigger');
  var instance = M.Dropdown.init(elem);
  }

}
