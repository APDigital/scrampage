import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public expanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public toggleNavbar(currentlyExpanded: any) {
      this.expanded = currentlyExpanded;
  }
}
