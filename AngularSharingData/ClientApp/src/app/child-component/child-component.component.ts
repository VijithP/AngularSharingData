import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';
import{DataService} from '../data.service'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() loggedUName:string;

  @Output() messageFromChild:EventEmitter<string>=new EventEmitter<string>();
  similarMsg:string;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe(msg=>this.similarMsg=msg)
  }

  TransferMsg()
  {    
    this.messageFromChild.emit("User is valid  from child Component");
  }

  NewMsg()
  {
   this._dataService.changeMessage("New Message From Child 1") ;
  }

}
