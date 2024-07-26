import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from "./pages/add-customer/add-customer.component";
import { ViewAllCustomersComponent } from "./pages/view-all-customers/view-all-customers.component";
import { AddItemComponent } from "./pages/add-item/add-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCustomerComponent, ViewAllCustomersComponent, AddItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
}
