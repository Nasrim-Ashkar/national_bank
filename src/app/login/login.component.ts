import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno:any
  psw:any
  data="Your Perfect Banking Partner!!!"

  inputplaceholder="Enter Account Number"
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1000,username:"manu",password:"abc123",balance:0},
    1002:{acno:1000,username:"jinu",password:"abc123",balance:0},
    1003:{acno:1000,username:"sinu",password:"abc123",balance:0},
    1004:{acno:1000,username:"teenu",password:"abc123",balance:0}
  }
  constructor() {}

  ngOnInit(): void{

  }
  login(){
    alert('login clicked')
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }
  pswrdChange(event:any){

    this.psw=event.target.value
    console.log(this.psw);



  }

}
