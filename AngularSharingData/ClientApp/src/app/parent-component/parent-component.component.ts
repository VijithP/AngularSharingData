import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import{ChildComponent2Component} from '../child-component2/child-component2.component'
import{DataService} from '../data.service'
import { Data } from '@angular/router';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements AfterViewInit {

  @ViewChild(ChildComponent2Component,null) childC2;

  loggedUserName:string;
  messageFromChild:string;

  messageFromChild2:string;

 
  similarMsg:string;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.loggedUserName='Vijith';
    this._dataService.currentMessage.subscribe(msg=>this.similarMsg=msg)
  }

  ngAfterViewInit()
  {

  }

  MessageFromHandler(data)
  {

    debugger;
    this.messageFromChild=data;

  }
  MessageFromHandler2(data)
  {

    debugger;
    this.messageFromChild2=data;

  }


}
