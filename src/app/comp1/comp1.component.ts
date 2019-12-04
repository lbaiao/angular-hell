import { Component, OnInit } from '@angular/core';
import { Comp1Service } from '../comp1.service';
import { FormBuilder } from '@angular/forms';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  id:number = 0;
  childId = 0;
  data;
  comp1Form;
  comp2;
  childrenData = [];
  constructor(
    private service: Comp1Service,
    private formBuilder: FormBuilder
  ) { 
    this.comp2 = Array<Comp2Component>();
    this.comp1Form = this.formBuilder.group(
      {
        campo1:''
      }
    )
  }

  ngOnInit() {
    this.service.registerComp1(this);
  }

  registerComp2(comp){
    this.comp2.push(comp);
  }

  recordData(){
    this.data = this.comp1Form.value.campo1
    // this.data = data.campo1
  }

  onPush(){
    this.service.pushData();
  }

  onPrint(){
    this.service.printData();
  }

  getComp2ChildrenData(){
    this.comp2.forEach(element => {
      this.childrenData.push(element.data)
    });
    return this.childrenData;
  }

  getFullData(){
    return JSON.stringify({
      campo1: this.data,
      children: 
        this.getComp2ChildrenData()      
    });
  }

  getJsonFullData(){
    let data = this.getFullData()
    let json = JSON.stringify(data)
    console.log(json)
    return json;
  }

  // printComp2Prop(){
  //   console.log("comp 2 prop: " + this.service.comp2.prop)
  // }

}
