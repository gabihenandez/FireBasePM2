import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    usuario:'',
    password:'',
    email:'',
    flag: false,

  }

  constructor(private router:Router, private datos:DatosService) {}
  
  onKeyUpEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
    let email = new RegExp("[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!email.test(this.user.email)){
      //this.user.flagEmail =false;
    }else{
      //this.user.flagEmail = true;
    }
  }

  onKeyUpPass(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    
    if(!regExp.test(newValue)){
      
      event.target.value = newValue.slice(0, -1);
      
    }
    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
    if(!password.test(this.user.password)){
      this.user.flag = false
      
    }else{
      this.user.flag = true
    }
  }
  
  async onSubmit(_form: NgForm) {
    console.log(this.user);
    if(this.user.usuario.length<8 || this.user.password.length<8){
      alert("Requisitos no cumplidos")
      
    }else{
      console.log(_form.value)
     this.datos.Login(_form.value).then((res)=>{
       if(this.datos.userVerifiedMail()){
        this.router.navigate(['/dashboard/carousel']);
       }else{
        this.datos.sendEmailToVerification();
        this.datos.Logout();
       }
     },async (err) => {
     
    })
    alert(this.user.usuario + ' : ' + this.user.password)
      
    }
  } 

}
