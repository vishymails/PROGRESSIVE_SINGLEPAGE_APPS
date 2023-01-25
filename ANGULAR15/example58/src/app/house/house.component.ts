import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {

  constructor(private router : Router) {
    
  }

  goToOffice(message : string) {
    this.router.navigate(['/office'], {queryParams : {message : message }});
  }
}
