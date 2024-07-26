import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-all-customers',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  providers: [],
  templateUrl: './view-all-customers.component.html',
  styleUrl: './view-all-customers.component.css'
})
export class ViewAllCustomersComponent implements OnInit {
  public customerList: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData()
  }

  deleteCustomer(customer:any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost:8080/customers/delete-by-id/${customer.id}`, {responseType: 'text'}).subscribe
          (data => {
            this.loadData();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            console.log(data)
          }
          )
          
         
      }
    });
  }

  loadData(){
    this.http.get("http://localhost:8080/customers/get-all").subscribe(
      res => {
        this.customerList = res;
      }
    )
  }
}
