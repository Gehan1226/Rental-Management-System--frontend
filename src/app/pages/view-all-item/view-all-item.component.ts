import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-item',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './view-all-item.component.html',
  styleUrl: './view-all-item.component.css'
})
export class ViewAllItemComponent implements OnInit{
  public itemList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData() {
    this.http.get("http://localhost:8080/items/get-all").subscribe(
      res => {
        this.itemList = res;
      }
    )
  }

}
