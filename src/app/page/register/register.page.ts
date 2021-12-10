import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    usuario:'',
    password:'',
    apellido: '',
    email:'',
    passwordConf:'',
    flagUsuario: false,
    flagPass: false,
    flagPassConf: false,
    flagEmail:false,
  }

  constructor(private router:Router, private datos:DatosService) { }

  ngOnInit() {
  }

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
    let usuarios = new RegExp("^[A-Za-z0-9]*$");
    if(!usuarios.test(this.user.usuario)){
      
      this.user.flagUsuario = false;
    }else{
      
      this.user.flagUsuario = true;
    }
  }

  // onKeyUpApellido(event: any){
  //   let newValue = event.target.value;
  //   console.log(newValue);
 
  //   let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
  //   if(!regExp.test(newValue)){
  //     event.target.value = newValue.slice(0, -1);
  //   }
  // }

  onKeyUpPass(event: any){
    let newValue = event.target.value;
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }

    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");

    if(event.target.name=="password"){
      if(!password.test(this.user.password)){
        this.user.flagPass = false;
      }else{
        this.user.flagPass = true;
      }
    }
    if(event.target.name=="passwordConf"){
      if(!password.test(this.user.passwordConf)){
        this.user.flagPassConf = false;
      }else{
        this.user.flagPassConf = true;
      }
    }
    
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
    if(this.user.password == this.user.passwordConf){
      if(this.user.password.length>=8 && this.user.passwordConf.length>=8 && this.user.usuario.length>=8){
        this.datos.register(_form.value).then((res)=>{
        this.datos.sendEmailToVerification();
        this.datos.Logout();
      alert("Registro exitoso")
       this.router.navigate(['/home']);
      }).catch(err=>console.log('Error'+ err))
      }else{
        alert("El nombre de usuario no cumple con las condiciones")
      }
      
    }else{
      alert("Las contraseñas no son iguales")
      } 
  }
} 
