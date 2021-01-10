import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-json-to-excel',
  templateUrl: './json-to-excel.component.html',
  styleUrls: ['./json-to-excel.component.css']
})
export class JsonToExcelComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  json_excel()
  {
    
    var wscols = [
      {wch:20},
      {wch:20},
      {wch:20},
      {wch:20}
  ];
  
 
    const ws:XLSX.WorkSheet=XLSX.utils.json_to_sheet(users);
    ws['!cols'] = wscols;
    
    // var cell_address = ws['A2'];
    // cell_address.s={alignment:{ wrapText: true }}
    
    // cell_address. = {
    //   alignment: {
    //     wrapText: '1', // any truthy value here
    //   },
    // };
  //  const cell= XLSX.utils.format_cell(ws['A1']);
    // cell.s = {alignment:{ wrapText: true }}
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet 1');
    // const cell = { v: ws[2][0], s:{alignment:{ wrapText: '1' }}};
    
  //  cell.s={alignment:{ wrapText: true}};
    XLSX.writeFile(wb,'result.xlsx', { bookType: 'xlsx', type: 'buffer'});
    // XLSX.writeFile(wb,'result.xlsx');
  
  }

}

const users=[
  {
    first_name:"rahulqqqqqqqqqqqqqqqqqqqqqqqqqq",
    last_name:"shelke"
  },
  {
    first_name:"yogesh",
    last_name:"shelke"
  },
  {
    first_name:"ash",
    last_name:"mule"
  },
  {
    first_name:"anoch",
    last_name:"mane"
  },
]
