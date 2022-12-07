import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: User = new User("","","","");
  hidden: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() : void{
    this.hidden = true
    console.log(this.model)
  }
}
