import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  constructor(private http: HttpClient) { }

  public item = {
    id: undefined,
    name: undefined,
    rentalPerDay: undefined,
    finePerDay: undefined,
    qtyOnHand: undefined,
  }

  addItem() {
    if (this.item.name && this.item.rentalPerDay && this.item.finePerDay && this.item.qtyOnHand) {
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

          this.http.post("http://localhost:8080/items/save", this.item, { responseType: 'text' })
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
}
