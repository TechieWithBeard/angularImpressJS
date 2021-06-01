import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide3d',
  templateUrl: './slide3d.component.html',
  styleUrls: ['./slide3d.component.css']
})
export class Slide3dComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    this.loadScript();
    this.loadexScript();
  }


  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../../assets/impress.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

public loadexScript() {
  let body = <HTMLDivElement> document.body;
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../assets/ex.js';
  script.async = true;
  script.defer = true;
  body.appendChild(script);
}
}
