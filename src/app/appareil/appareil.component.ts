import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string | undefined;
  @Input() status : boolean | undefined;
  @Input() index : any;
  @Input() id: any;
  
  appareilStatus: string | undefined;

  constructor(private appareilService: AppareilService) { 
  }

  getReadableStatus(){
    return this.appareilService.getAppareilReadableStatus(+this.id); 
  }

  onSwitch(){
    if(this.status){
      this.appareilService.switchOffOne(this.index);
    }
    else{
      this.appareilService.switchOnOne(this.index);
    }
    
  }

  getColor(){ 
    if(this.status){
      return "green";
    }
    else{
      return "red";
    }
  }

  ngOnInit(): void {
  }
}
