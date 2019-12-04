import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Comp1Service } from '../comp1.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  parentId:number = 0;
  id:number = 0;
  comp2Form;
  prop = 0; 
  data = {
    campo1: '',
    campo2: ''
  };

  constructor(
    private formBuilder: FormBuilder,  
    private service: Comp1Service  

  ) { 
    this.comp2Form = this.formBuilder.group(
      {
        campo1: '',
        campo2: ''
      }
    );
  }

  ngOnInit() {
    this.service.registerComp2(this);
  }

  getId(id:number, parentId:number){
    this.id=id;    
    this.parentId = parentId;
  }

  recordData(){
    this.data.campo1 = this.comp2Form.value.campo1;
    this.data.campo2 = this.comp2Form.value.campo2;
  }

  addProp(){
    this.prop++;
    console.log("prop: " + this.prop);
  }

  printProp(){
    console.log("prop: " + this.prop);
  }  

}
