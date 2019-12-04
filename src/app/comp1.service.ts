import { Injectable } from '@angular/core';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class Comp1Service {  
  data = [];
  comp1;
  comp2;
  jsonObj = [];  

  constructor() {
    this.comp1 = Array<Comp1Component>();
    this.comp2 = Array<Comp2Component>();
   }

  addData(data: string){
    this.data.push(data)
  }

  printData(){
    this.data.forEach(element => {
      console.log(element)
    });
  }

  registerComp1(comp: Comp1Component){
    this.comp1.push(comp)
  }

  registerComp2(comp: Comp2Component){
    let comp1 = this.comp1.filter(
      c => c.id === comp.parentId
    )[0];
    comp1.comp2.push(comp)
    this.comp2.push(comp)
    comp1.childId++;
  }

  // getComp1Data(){
  //   this.comp1.forEach(element=>{
  //     element.recordData()
  //   });
  // }

  // getComp2Data(){
  //   this.comp2.forEach(element => {
  //     element.recordData()
  //   });
  // }  

  getJson(){
    this.jsonObj = []
    this.comp1.forEach(c1 => {
      this.jsonObj.push({

      })
    });
  }

  pushData(){
    (this.comp1).forEach(element => {
      element.recordData()
    });
    this.comp2.forEach(element => {
      element.recordData()
    });
  }
}


