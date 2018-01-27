import { Component, OnInit } from '@angular/core';

import { Fruitlist, ListOfFruitEntity } from "../interfaces/fruitlist.interface";
import { ChosenletterComponent } from "../chosenletter/chosenletter.component";

import { FruitydataService } from "../fruitydata.service";

@Component({
  selector: 'app-fruitsatob',
  templateUrl: './fruitsatob.component.html',
  styleUrls: ['./fruitsatob.component.css'] 
})
export class FruitsatobComponent implements OnInit {
  fruitTitle: string = "Fruits from A to B";
  abFruits : Fruitlist[];
  selectedLetter : Fruitlist;

  constructor(private FruitydataService : FruitydataService) { }

  ngOnInit() {
    this.getFruit();
  }

  getFruit():void{
    this.FruitydataService.getFruitAtoB()
    .subscribe(fruit => this.abFruits = fruit);
  }
  
}
