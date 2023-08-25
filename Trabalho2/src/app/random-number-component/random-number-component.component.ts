import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {
  variavel!: number;
constructor(private dataService : DataServiceService){
  
}

  
  button(){
     this.variavel =  this.dataService.getRandomNumber(); 

    

  }
}
 