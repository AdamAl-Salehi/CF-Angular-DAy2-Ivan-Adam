import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
 selector: 'contact-home',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
        clickCounter :number = 0;
 
 info = new FormGroup({
   firstName: new FormControl('',Validators.required),
   lastName: new FormControl('',Validators.required),
   age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(2),]),
   email:new FormControl('',[Validators.required,Validators.email]),
   address:new FormControl('',Validators.required),
 });


 constructor() { }

 ngOnInit() {
 }

 onSubmit(){
  if(this.info.valid){
    var a = this.info.value;
    console.log(a)
 }
  }
}
