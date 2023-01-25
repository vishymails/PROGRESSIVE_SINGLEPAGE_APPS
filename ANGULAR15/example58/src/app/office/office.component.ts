import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent {

  message : string = '';

  constructor(private route : ActivatedRoute) {}


  ngOnInit() : void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'] || '';
    });
  }
}
