import { Component, OnInit } from '@angular/core';
import { AppareilService } from "../services/appareil.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string | undefined;
  status: boolean | undefined;
  id: string | undefined;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute ) {
    this.id = this.route.snapshot.params["id"];
    let appareil = this.appareilService.getAppareilById(+this.id);
    this.name = appareil.name;
    this.status = appareil.status;
   }

   getReadableStatus(){
     return this.appareilService.getAppareilReadableStatus(+this.id);
   }

  ngOnInit(): void {

  }

}