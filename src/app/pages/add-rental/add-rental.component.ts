import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-rental',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-rental.component.html',
  styleUrl: './add-rental.component.css'
})
export class AddRentalComponent {

  constructor(private http: HttpClient) { }


  public rental = {
    id: undefined,
    rentalDate: undefined,
    returndate: undefined,
    dueDate: undefined,
    totalCost: undefined,
    itemIdList: undefined,
    customerId: undefined
  }

  addRental() {
    this.http.post("http://localhost:8080/rentals/save", null, { responseType: 'text' })
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }
}
