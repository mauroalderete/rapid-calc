import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expresion="";
  result="0";
  buttons =[
    [
      { value: "C", label: "trash" },
      { value: ".", label: " " },
      { value: ".", label: " " },
      { value: "B", label: "backspace" }
    ],
    [
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "9", label: "9" },
      { value: "/", label: "/" }
    ],
    [
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "*", label: "*" }
    ],
    [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "-", label: "-" }
    ],
    [
      { value: ",", label: "," },
      { value: "0", label: "0" },
      { value: ".", label: "." },
      { value: "+", label: "+" }
    ]
  ]

  constructor(public navCtrl: NavController) {

  }

  buttonPress(v){
    switch (v){
      case 'C':{
        this.expresion="";
      }break;
      case 'B': {
        if (this.expresion.length>1){
          this.expresion = this.expresion.slice(0, -1);
        }else{
          this.expresion="";
        }
      } break;
      default:{
        this.expresion+=v;
      }
    }

    var last = this.expresion.slice(-1);
    switch(last){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case 'B':{
        this.result=eval( this.expresion );
      }break;
      case "":{
        this.result="0";
      }
    }
  }

}
