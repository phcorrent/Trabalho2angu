import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';


@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent implements OnInit {
  @Input() joao!: number;

  constructor(private dataService: DataServiceService) {}


  ngOnInit() {
  
  }
}
