import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  

  constructor(private datos:DatosService,private router:Router) { }

  ngOnInit() {
    
  }
  signOut() {
    this.datos.Logout().then(() => {
      this.router.navigateByUrl('/', {replaceUrl: true});
    });
  }

}
