import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  courses:any =[
    {
      name: "Development" , id : 0
    },
    
    {
      name: "Design " , id : 1
    },
    
    {
      name: "Photography " , id : 1
    },
  ]

  onLog(f:any){
    console.log(f);
    }

  onSubmit(form :NgForm){
    console.log(form + "The Form is")
  }

}
