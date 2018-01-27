import { Component, OnInit, Input } from '@angular/core';

// ActivatedRoute allows me to get the url from the page
import { ActivatedRoute } from '@angular/router';

// Location is a service that applications can use to interact with a browser's URL.
import { Location } from '@angular/common';

// interface
import { Fruitlist, ListOfFruitEntity } from '../interfaces/fruitlist.interface';

// FruitydataService - this is the data service
import { FruitydataService } from '../fruitydata.service';

@Component({
  selector: 'app-fruitdetails',
  templateUrl: './fruitdetails.component.html',
  styleUrls: ['./fruitdetails.component.css']
})
export class FruitdetailsComponent implements OnInit {
  @Input() fruitDetails: any;
  fruitName: string;
  constructor(
    private route: ActivatedRoute,
    private fruitydataService: FruitydataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.fruitName = this.route.snapshot.paramMap.get('name');
    this.getFruitDetails();
  }


  getFruitDetails(): void {
    this.fruitydataService.getChosenFruitDetails(this.fruitName)
    .subscribe(fruitDetails => this.fruitDetails = fruitDetails);
  }

    goBack(): void {
    this.location.back();
  }


}
