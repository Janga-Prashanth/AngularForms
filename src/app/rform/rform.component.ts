import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {

  constructor(private fb: FormBuilder) { }

  login !: FormGroup;
  
  initUserForm(): void{
  this.login = this.fb.group({
    name: [null, [Validators.required], null],
    email: [null, [Validators.required, Validators.email], null],
    password: [null, [Validators.required, Validators.minLength(5)], null],
    Confirmpassword: [null, [Validators.required], null]

  })
}

  show(r: any) {
    console.log(r.value);
    r.reset();
  }

}
