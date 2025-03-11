import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm:FormGroup=new FormGroup({
    fName:new FormControl('',[Validators.required]),
    lName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    userName:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl('maharastra'),
    zip:new FormControl(''),
    isAgreed:new FormControl(false),
  });
  
  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(()=>{ 
      this.userForm.controls['state'].enable();
    }, 5000);
    //const isValid=this.userForm.valid;
   }

  onSave(){
      const isValid= this.userForm.valid;
      const formValue=this.userForm.value;
      debugger;
    }

    ngOnInit(): void {
    
    }
  }



