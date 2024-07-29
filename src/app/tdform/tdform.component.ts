import { Component } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {

  show(r:any){
    console.log(r.value);
    r.reset();
  }

}
