import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-customers',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  standalone: true
})
export class CustomersComponent implements OnInit{
  customers:any ;
  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:8085/customers').subscribe(data => {
       this.customers=data ;
      }
      , error => {
        console.log(error);
      });
    }
}
