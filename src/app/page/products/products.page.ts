import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { FireServiceService } from 'src/app/services/fire-service.service';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  datosQr={
    url:'',
    name:'',
  }
  show=false;

  constructor(private fireService:FireServiceService, private barcodeScanner: BarcodeScanner, private datos:DatosService, private router:Router ) { }

  ngOnInit() {
    this.fireService.disparadorData.subscribe( data =>{
      this.show = true;
      this.datosQr.url = data.url;
      this.datosQr.name = data.name;
    })
  }

  QRBoton(){
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      prompt: 'Coloque el codigo a escanear dentro del area',
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      const dataSplit = ''+barcodeData["text"];
      const myArray = dataSplit.split(',');
      this.datosQr.url = myArray[0];
      this.datosQr.name = myArray[1];
      this.show = true;
    }).catch(err => {
      alert("Error")
    });
  }

  signOut() {
    this.datos.Logout().then(() => {
      this.router.navigateByUrl('/', {replaceUrl: true});
    });   
  }
}
