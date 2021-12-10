import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';

export interface Usuario{
  id?:string;
  //usuario:string;
  password:string;
  paterno:string;
  materno:string;
  phone:string; 
  nombre:string;
}


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  constructor(private datos:DatosService,private router:Router) { }

  usuariox = {} as Usuario;
  
  user = {
    //usuario: '',
    paterno: '',
    materno : '',
    phone:'',
    nombre:'',
    flagEmail:false,
    flagUsuario:false,
    flagPaterno:false,
    flagMaterno:false,
    flagPhone:false,
  }

  ngOnInit() {
    const idUserLogged = this.datos.getUserUid();
    
    this.datos.getUserById(idUserLogged).subscribe(res => {
      this.usuariox = res;
      console.log(res);
    })
  }

  /*onKeyUpEmail(event: any){
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
  }*/
  

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z? ]+$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.flagUsuario = true;
    }
    let usuarios = new RegExp("^[A-Za-z? ]+$");
    if(event.target.name=="nombre"){
      if(!usuarios.test(this.user.nombre)){
        this.user.flagUsuario = false;
      }else{
        this.user.flagUsuario = true;
      }
    }
    if(event.target.name=="paterno"){
        if(!usuarios.test(this.user.paterno)){
          this.user.flagPaterno = false;
        }else{
          this.user.flagPaterno = true;
        }
    }
    if(event.target.name=="materno"){
      if(!usuarios.test(this.user.materno)){
        this.user.flagMaterno = false;
      }else{
        this.user.flagMaterno = true;
       }
   }
 }

 onKeyPhone(event: any){
  let newValue = event.target.value;
  console.log(newValue);
  let regExp = new RegExp("[0-9]");
  if(!regExp.test(newValue)){
    event.target.value = newValue.slice(0, -1);
  }

  let telefono = new RegExp("^[0-9]*$");
  if(!telefono.test(this.user.phone)){
      event.target.value = newValue.slice(0, -1);
      this.user.flagPhone =false;
  
  }else{
    this.user.flagPhone = true;
  }
}

 async onSubmit(_form: NgForm){
  const idUserLogged = this.datos.getUserUid();
  this.datos.update(_form.value, idUserLogged).then( async (res) =>{
    alert("Usuario Editado")
    console.log(this.user) 
    console.log(this.user.phone)
  },async (err) =>{
    console.log(err)
  })
 } 

 signOut() {
  this.datos.Logout().then(() => {
    this.router.navigateByUrl('/', {replaceUrl: true});
  });
}
}
