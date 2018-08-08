import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() { }
  @ViewChild('calculatorBody') calculatorBody: ElementRef;
  calculatorExpanded: boolean;
  input1: any;
  input2: any;
  operator: any;
  output: number;
  showGeneral= true;
  showPhysics= false;
  showFactorial= false;
  //Physics Values:
  Vi: any;
  Vf: any;
  displacement: any;
  time: any;
  acceleration: any;
  haveVi: boolean;
  haveVf: boolean;
  haveDis: boolean;
  haveTime: boolean;
  haveAcc: boolean;
  //End Physics Values
  factorialInput: any;
  factorialResult: number;

  toggleCalculatorBody() {
    if (this.calculatorBody.nativeElement) {
      this.calculatorExpanded = !this.calculatorExpanded
    }
  };

  generalTab(){
    this.showFactorial = false;
    this.showPhysics = false;
    this.showGeneral = true;
  }
  factorialTab(){
    this.showFactorial = true;
    this.showPhysics = false;
    this.showGeneral = false;
  }
  physicsTab(){
    this.showFactorial = false;
    this.showPhysics = true;
    this.showGeneral = false;
  }

  calculate() {
    this.input1 = (<HTMLInputElement>document.getElementById("inp1")).value;
    this.input2 = (<HTMLInputElement>document.getElementById("inp2")).value;
    this.operator = (<HTMLInputElement>document.getElementById("opField")).value
    switch(this.operator) {
      case "+":
        this.output = (Number(this.input1)+Number(this.input2));
        break;
      case "-":
        this.output = (Number(this.input1)-Number(this.input2));
        break;
      case "*":
        this.output = (Number(this.input1)*Number(this.input2));
        break;
      case "/":
        this.output = (Number(this.input1)/Number(this.input2));
        break;
      case "^":
        this.output = (Number(this.input1)**Number(this.input2));
        break;
      default:
        console.log("An error has occurred.");
    }
    console.log(this.output);
  }

  getAvailableVars() {
    if(Number((<HTMLInputElement>document.getElementById("vStart")).value)){
      this.Vi = Number((<HTMLInputElement>document.getElementById("vStart")).value);
      this.haveVi = true;
    }else {
      // this.Vi = "";
      this.haveVi = false;
    }
    if(Number((<HTMLInputElement>document.getElementById("vEnd")).value)){
      this.Vf = Number((<HTMLInputElement>document.getElementById("vEnd")).value);
      this.haveVf = true;
    }else {
      // this.Vf = "";
      this.haveVf = false;
    }
    if(Number((<HTMLInputElement>document.getElementById("time")).value)){
      this.time = Number((<HTMLInputElement>document.getElementById("time")).value);
      this.haveTime = true;
    }else {
      // this.time = "";
      this.haveTime = false;
    }
    if(Number((<HTMLInputElement>document.getElementById("displacement")).value)){
      this.displacement = Number((<HTMLInputElement>document.getElementById("displacement")).value);
      this.haveDis = true;
    }else {
      // this.displacement = "";
      this.haveDis = false;
    }
    if(Number((<HTMLInputElement>document.getElementById("acceleration")).value)){
      this.acceleration = Number((<HTMLInputElement>document.getElementById("acceleration")).value);
      this.haveAcc = true;
    }else {
      // this.acceleration = "";
      this.haveAcc = false;
    }
  }

  getVi(){
    if(this.haveVi===false){
      if(this.haveDis && this.haveTime && this.haveAcc){
        this.Vi = Number((this.displacement/this.time)-(0.5*this.acceleration*this.time));
        this.haveVi = true;
      } else if(this.haveAcc && this.haveTime && this.haveVf){
        this.Vi = Number(this.Vf - (this.acceleration*this.time));
        this.haveVi = true;
      } else if(this.haveVf && this.haveDis && this.haveAcc){
        this.Vi = Number(((this.Vf**2)-(2*this.acceleration*this.displacement))**0.5);
        this.haveVi = true;
      } else if(this.haveVf && this.haveTime && this.haveDis) {
        this.Vi = Number(2*((this.displacement*this.time)-(0.5*this.Vf)));
        this.haveVi = true;
      }
      else {
        this.haveVi = false;
      }
    }
  }

  getVf(){
    if(this.haveVf===false){
      if(this.haveVi && this.haveAcc && this.haveTime){
        this.Vf = Number(this.Vi+(this.acceleration*this.time));
        this.haveVf = true;
      } else if(this.haveDis && this.haveVi && this.haveTime) {
        this.Vf = Number(2*((this.displacement*this.time)-(0.5*this.Vi)));
        this.haveVf = true;
      } else if(this.haveDis && this.haveVi && this.haveAcc){
        this.Vf = Number(((this.Vi**2)+(2*this.acceleration*this.displacement))**0.5);
        this.haveVf = true;
      } else{
        this.haveVf = false;
      }
    }
  }

  getDis(){
    if(this.haveDis===false){
      if(this.haveVi && this.haveVf && this.haveTime){
        this.displacement = Number(this.time*(0.5*(this.Vf+this.Vi)));
        this.haveDis = true;
      } else if(this.haveVi && this.haveTime && this.haveAcc) {
        this.displacement = Number((this.time*this.Vi)+(this.acceleration*this.time*this.time*0.5));
        this.haveDis = true;
      } else if(this.haveAcc && this.haveVf && this.haveVi){
        this.displacement = Number(((this.Vf**2)-(this.Vi**2))/(this.acceleration*2));
        this.haveDis = true;
      } else{
        this.haveDis = false;
      }
    }
  }

  getTime(){
    if(this.haveTime===false){
      if(this.haveVi && this.haveVf && this.haveAcc){
        this.time = Number((this.Vf-this.Vi)/this.acceleration);
        this.haveTime = true;
      } else if(this.haveDis && this.haveVi && this.haveVf){
        this.time = Number(this.displacement*0.5*(this.Vi+this.Vf));
        this.haveTime = true;
      } else if(this.haveDis && this.haveVi && this.haveAcc){
        this.getVf();
        this.time = Number((this.Vf-this.Vi)/this.acceleration);
        this.haveTime = true;
      } else{
        this.haveTime = false;
      }
    } 
  }

  getAcc(){
    if(this.haveAcc===false){
      if(this.haveVi && this.haveVf && this.haveTime){
        this.acceleration = Number((this.Vf-this.Vi)/this.time);
        this.haveAcc = true;
      } else if(this.haveDis && this.haveTime && this.haveVi){
        this.acceleration = Number((this.displacement-(this.Vi*this.time))/(0.5*this.time*this.time));
        this.haveAcc = true;
      } else if(this.haveVf && this.haveVi && this.haveDis){
        this.acceleration = Number(((this.Vf**2)-(this.Vi**2))/(2*this.displacement));
        this.haveAcc = true;
      } else{
        this.haveAcc = false;
      }
    }
  }

  enoughInfo(){
    var x = 0;
    if(this.haveAcc){x = x + 1};
    if(this.haveDis){x = x + 1};
    if(this.haveTime){x = x + 1};
    if(this.haveVi){x = x + 1};
    if(this.haveVf){x = x + 1};
    if(x<3){
      return false;
    } else {
      return true;
    }
  }

  clearNumbers(){
    this.Vi = "";
    this.Vf = "";
    this.time = "";
    this.displacement = "";
    this.acceleration = "";
  }

  roundNumbers(){
    this.Vi = Number(this.Vi.toFixed(2));
    this.Vf = Number(this.Vf.toFixed(2));
    this.time = Number(this.time.toFixed(2));
    this.displacement = Number(this.displacement.toFixed(2));
    this.acceleration = Number(this.acceleration.toFixed(2));
  }

  physicsCalculate(){
    this.clearNumbers();
    this.getAvailableVars()
    if(this.enoughInfo()){
      var i;
      for (i = 0; i < 6; i++){
        this.getVi();
        this.getVf();
        this.getDis();
        this.getTime();
        this.getAcc();
      }
      this.roundNumbers();
      console.log(this.Vi);
      console.log(this.Vf);
      console.log(this.time);
    } else {
      console.log("More Info Needed")
    }
  }

  factorialCalculate(){
    this.factorialInput = Number((<HTMLInputElement>document.getElementById("fact")).value);
    this.factorialResult = this.findFactorial(this.factorialInput);
  }

  findFactorial(n){
    if(n<=1){
      return n;
    } else{
      return Number(n*this.findFactorial(n-1));
    }
  }

  ngOnInit() {
  }

}
