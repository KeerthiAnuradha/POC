import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() name: string;
  @Input() size: number;
  @Input() numOfPages: number; 
  @Input() content: string;
  
  @Output() opened = new EventEmitter();
  @Output() contentChanged = new EventEmitter();
  @Output() closed = new EventEmitter();
}
