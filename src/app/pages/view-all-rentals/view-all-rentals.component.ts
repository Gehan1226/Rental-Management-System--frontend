import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-rentals',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './view-all-rentals.component.html',
  styleUrl: './view-all-rentals.component.css'
})
export class ViewAllRentalsComponent {
  public rentalList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.http.get("http://localhost:8080/rentals/get-all").subscribe(
      res => {
        this.rentalList = res;
      }
    )
  }

}
