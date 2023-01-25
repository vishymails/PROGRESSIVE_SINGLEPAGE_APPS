import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  name = "Sherlock Holmes Series Complete";

  author = "Conan Doyle";

  src = "https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg";



  name2 = "Siddartha";

  author2 = "Hermann Hesse"

  src2 = "https://images-na.ssl-images-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg";

  

  data : string = "Dr.Rao";

 isShowing :boolean = true;

 toggleBooks() {
  this.isShowing = ! this.isShowing;
 }
}
