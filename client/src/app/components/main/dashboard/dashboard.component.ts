import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../view/sidebar/sidebar.component';
import { ButtonComponent } from '../../view/button/button.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidebar') sidebar: SidebarComponent;
  public type: string = 'Push';
  public target: string = '.content';
  
  @ViewChild('togglebtn')
  public togglebtn: ButtonComponent;

  constructor() { }
  ngAfterViewInit() {
    // console.log(this.sidebar);
  }

  ngOnInit(): void {
    console.log("dashboard-component")
  }


  public onCreated(args: any) {
       this.sidebar.element.style.visibility = '';
  }

  btnClick(){
      if(this.togglebtn.element.classList.contains('e-active')){
          this.togglebtn.content = 'Open';
          this.sidebar.hide();
      }
      else{
          this.togglebtn.content = 'Close';
          this.sidebar.show();
      }
  }

  closeClick() {
       this.sidebar.hide();
       this.togglebtn.element.classList.remove('e-active');
       this.togglebtn.content = 'Open'
  }


}
