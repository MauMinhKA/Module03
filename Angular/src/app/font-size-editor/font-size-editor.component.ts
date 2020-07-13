import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dcmm',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {

  fontSize = 20;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
