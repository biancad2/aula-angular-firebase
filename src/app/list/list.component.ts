import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { LoggerService } from '../services/logger.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public listService: ListService, private loggerService: LoggerService) { 
    this.loggerService.add("ListComponent Constructed")
  }

  ngOnInit(){
    this.loggerService.add("ListComponent initialized");
  }

}
