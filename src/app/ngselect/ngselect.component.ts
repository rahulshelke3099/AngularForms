import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-ngselect',
  templateUrl: './ngselect.component.html',
  styleUrls: ['./ngselect.component.css']
})
export class NgselectComponent implements OnInit {
  editmode:boolean
  constructor() { }

  ngOnInit(): void {
    this.editmode=true;
  }
  paste="false";
  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];
  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];


handlePaste(event:Event)
{
  console.log(event);
}

onSubmit()
{
 this.editmode=false;
}

}
