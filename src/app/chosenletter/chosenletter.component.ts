import { Component, OnInit, Input} from '@angular/core';

// ActivatedRoute allows me to get the url from the page
import { ActivatedRoute } from '@angular/router';

// Location is a service that applications can use to interact with a browser's URL.
import { Location } from '@angular/common';

// interface
import { Fruitlist, ListOfFruitEntity } from '../interfaces/fruitlist.interface';

//  FruitydataService - this is the data service
import { FruitydataService } from '../fruitydata.service';

@Component({
  selector: 'app-chosenletter',
  templateUrl: './chosenletter.component.html',
  styleUrls: ['./chosenletter.component.css']
})
export class ChosenletterComponent implements OnInit {

  @Input() chosenLetter: Array<any>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private fruitydataService: FruitydataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFruit();
  }

  getFruit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      this.fruitydataService.getChosenFruit(this.id)
      .subscribe(chosenLetter => this.chosenLetter = chosenLetter);
  }
  goBack(): void {
    this.location.back();
  }

}
