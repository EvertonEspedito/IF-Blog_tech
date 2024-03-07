import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
 menuAbrir: boolean = true;
 
  constructor() { }
  
  toggleMenu(){
    this.menuAbrir =! this.menuAbrir;
  }/*Menu Mobile*/

siteIf(){
  window.open("https://www.ifsertao-pe.edu.br/index.php", "_blank");

}
  ngOnInit(): void {
  }

}
