import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class PrinterProvider {

  constructor(private bluetoothSerial: BluetoothSerial) {}

  enableBluetooth(){
    return this.bluetoothSerial.enable();
  }

  searchBluetooth(){
    return this.bluetoothSerial.list();
  }

  connectBluetooth(address){
    return this.bluetoothSerial.connect(address);
  }

  printData(data){
    return this.bluetoothSerial.write(data);
  }

  disconnectBluetooth(){
    return this.bluetoothSerial.disconnect();
  }

  scanBluetooth(): Promise<any>{
    return this.bluetoothSerial.discoverUnpaired();
  }

}
