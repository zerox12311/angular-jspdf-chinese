import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-demo',
  templateUrl: './pdf-demo.component.html',
  styleUrls: ['./pdf-demo.component.scss']
})
export class PdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // angular.json
  // scripts": [
  //   "node_modules/jspdf/dist/jspdf.min.js",
  //   "src/assets/fonts/jf-normal.js"
  // ]
  savePdf() {
    const doc = new jsPDF();
    console.log(doc.getFontList());
    doc.setFont('jf');
    doc.text('中文', 10, 20);
    doc.text('測試', 30, 20);
    doc.text('你好', 50, 20);

    doc.save('a4.pdf');
  }

}
