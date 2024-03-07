import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

@Input()
    imagem__notice:string = "";
@Input()
    data__notice:string = "";
@Input()
    tittle__notice:string = "";
@Input()
    notice__text:string = ``;
@Input()
  meusiteid:string  = '';

   notice__site(siteUrl:string){

      window.open(siteUrl,"_blank");
      
    }

  constructor() { }

  ngOnInit(): void {
  }

}
