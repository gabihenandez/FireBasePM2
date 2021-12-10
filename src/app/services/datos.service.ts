import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,sendEmailVerification, 
  signInWithEmailAndPassword,sendPasswordResetEmail } from '@angular/fire/auth';
  import { Observable} from 'rxjs';


  import { Firestore, docData, setDoc, doc, updateDoc, collection, where, onSnapshot,collectionData }
  from '@angular/fire/firestore';
  export interface User{
   id?:string;
   usuario:string;
   email:string;
   password:string;
   paterno:string;
   materno:string;
   phone:string;
   nombre:string;
 }

 export interface Carousel {
   id?: string;
   url: string;
 }

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private auth: Auth,private fire: Firestore,) { }
  Login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.usuario, user.password);
  }

  Logout(): Promise<void> {
    return this.auth.signOut();
  }

  async register(user: User): Promise<any> {
    console.log(user.email+" "+user.password)
    const credential = await createUserWithEmailAndPassword(this.auth, user.email, user.password);
    const uid = credential.user.uid;
    const userRef = doc(this.fire, `usuarios/${uid}`);
    return setDoc(userRef, { usuario: user.usuario, email: user.email,  paterno: '' , materno: '', phone: '' });
  }

  userVerifiedMail(){
    return this.auth.currentUser.emailVerified;
  }
  async sendEmailToVerification(){
    return await sendEmailVerification(this.auth.currentUser)
  }

  async update(user: User, id): Promise<any> {
    console.log(user)
    const userRef = doc(this.fire, `usuarios/${id}`);
    return await updateDoc(userRef, {  materno: user.materno,nombre: user.nombre, paterno: user.paterno,phone: user.phone})
  }

  getUserUid() {
    return this.auth.currentUser.uid;
  }

  getUserById(id): Observable<User> {
    const userDocRef = doc(this.fire, `usuarios/${id}`);
    return docData(userDocRef, { idField: 'id' }) as Observable<User>
  }

  async EnviarResetPassword(email){
    return await sendPasswordResetEmail(this.auth, email);
  }

  getUrl(){
    const ref = collection(this.fire, 'carrusel');
    return collectionData(ref, {idField: 'id'}) as Observable<Carousel[]>;
  }
}
