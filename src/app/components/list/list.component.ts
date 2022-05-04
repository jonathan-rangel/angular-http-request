import { Component, OnInit } from '@angular/core';
import { Object } from 'src/app/models/city/object.interface';
import { DataService  } from './data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  
  objects: Object[] = [];
  constructor(private dataService:DataService) {}
  
  ngOnInit(): void {
    this.dataService.getAllObjects().subscribe(data => this.objects = data)
  }

}
