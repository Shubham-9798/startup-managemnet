import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../view/sidebar/sidebar.component';
import { ButtonComponent } from '../../view/button/button.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    // console.log(this.sidebar);
  }

  ngOnInit(): void {
    console.log("dashboard-component")
  }

}
