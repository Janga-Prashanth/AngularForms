import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit{

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  login !: FormGroup;
  
  initUserForm(): void{
  this.login = this.fb.group({
    name: ['', Validators.required],
    email: [null, [Validators.required, Validators.email], null],
    password: [null, [Validators.required, Validators.minLength(5)], null],
    Confirmpassword: [null, [Validators.required], null]
  })
}

  onsubmit(r: any) {
      if (this.login.invalid) {
        return;
    }
    else{
      console.log(r.value);
      r.reset();
    }    
  }

  get f() {
    return this.login.controls; 
   }

 getC(control:any){             //getting control
   return this.login.get(control)
 }

 getE(control:any){          //getting control errors
   return this.login.get(control)?.['errors'];
 }

}
