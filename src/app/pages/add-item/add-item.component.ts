import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
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
    isAvailable: undefined
  }

  addItem() {
    throw new Error('Method not implemented.');
    }
}
