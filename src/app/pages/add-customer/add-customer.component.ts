import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.genarateCustomerId();
  }

  customerId:any = "C001";

  public customer = {
    id: undefined,
    name: undefined,
    city: undefined,
    contact: undefined
  }

  addCustomer() {
    if (this.customer.name && this.customer.city && this.customer.contact) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, save it!"
      }).then((result) => {
        if (result.isConfirmed) {

          this.http.post("http://localhost:8080/customers/save", this.customer, { responseType: 'text' })
            .subscribe(
              data => {
                console.log(data);
              }
            );

          Swal.fire({
            title: "Saved!",
            text: "Customer has been Saved.",
            icon: "success"
          });
        }
      });
    }
  }

  genarateCustomerId(){
    this.http.get("http://localhost:8080/customers/get-last-id")
    .subscribe(data =>{
    
    });
  }



}
