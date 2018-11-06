import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FunkollectionApiService } from '../services/funkollection-api.service';

import { map } from "rxjs/operators";

import { Series } from "../models/Series";

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  providers: [FunkollectionApiService],
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imageSrc: any;
  event: any;
  series: Series[];
  displayNewSeriesInput: boolean;
  constructor( private apiService: FunkollectionApiService ) { 
  }

  ngOnInit() {
    this.getSeries();
    this.displayNewSeriesInput = false;
  }

  getSeries(): void{
    this.apiService.getSeries()
      .subscribe(series => {
        series.sort(function (a, b) {
          return a.name.localeCompare(b.name);
      });
        this.series = series;

      });
    

  }


  readURL(event: Event): void {
    this.event = event;
    if (this.event.target.files && this.event.target.files[0]) {
        const file = this.event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
  }

  checkSelection(value: any){

    if(value == 'Other'){
      this.displayNewSeriesInput = true;
    }
    else{
      this.displayNewSeriesInput = false;
    }
  }
}