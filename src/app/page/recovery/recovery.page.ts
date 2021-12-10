import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController  } from '@ionic/angular';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {

  user = {
    email:'',
    flagEmail: false,
  }

  constructor(private router:Router,private datos:DatosService,) { }

  ngOnInit() {
  } 

  onKeyUpEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
    let email = new RegExp("[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!email.test(this.user.email)){
      this.user.flagEmail =false;
    }else{
      this.user.flagEmail = true;
    }
  }
 
  async onSubmit(_form: NgForm) {
    //this.router.navigate(['/home']);
    this.datos.EnviarResetPassword(this.user.email).then(async (res)=>{
      alert("El correo de recuperacion fue enviado a: " + this.user.email);
    })
      
  } 

}
