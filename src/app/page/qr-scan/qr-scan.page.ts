import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { DatosService } from 'src/app/services/datos.service';
import { FireServiceService } from 'src/app/services/fire-service.service';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {
  

  constructor(private fireService:FireServiceService, private barcodeScanner:BarcodeScanner,) { }

  ngOnInit() {
    
  }
}
