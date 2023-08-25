import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
  
})
export class DataServiceService {
  static getRandomNumber(): number {
    throw new Error('Method not implemented.');
  }
  getRandomNumber(){
    return Math.floor(Math.random()*100)
  
  }
  public enviarpgera!: number;


  constructor() { 

  }
}
