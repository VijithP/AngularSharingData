import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{DataService} from '../data.service'

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {


  @Output() messageFromChild2:EventEmitter<string>=new EventEmitter<string>();
  constructor(private _dataService:DataService) { }

  similarMsg:string;

  ngOnInit() {
    this._dataService.currentMessage.subscribe(msg=>this.similarMsg=msg)
  }

  TransferMsg2()
  {
    
    this.messageFromChild2.emit("User is valid  from child Component 2");

  }

  NewMsg()
  {
   this._dataService.changeMessage("New Message From Child 2") ;
  }

}
