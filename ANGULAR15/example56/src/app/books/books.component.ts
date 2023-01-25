import { Component } from '@angular/core';

interface Book {
  name : string;
  author : string;
  src : string;
  price : number;
}

interface item {
  name : string;
  val : number;
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books : Book[] = [
    {
    name : "Sherlock Holmes Series Complete",
    author : "Conan Doyle",
    src : "https://images-na.ssl-images-amazon.com/images/I/51rvC3FJqkL._SX451_BO1,204,203,200_.jpg",
    price : 550
    }, 
    {

  name : "Siddartha", 
  author : "Hermann Hesse",
  src : "https://images-na.ssl-images-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg",
  price : 1200
    }, 
      {

        name : "A Naturalist’s Guide to the Mammals of India ", 
        author : "Bikram Grewal",
        src : "https://m.media-amazon.com/images/I/51108S+MApL._SX353_BO1,204,203,200_.jpg",
        price : 900
      }


    
  ] 

  
  

  data : string = "Dr.Rao";

 isShowing :boolean = true;

 companyName = "citibank india pvt ltd";

 
todaysdate = new Date();

datajson = {firstname : 'Ram', lastname : 'kumar', age : 25, address : {addr1 : 'bangalore', workaddr : 'pune'}};

companies = ["ISRO", "Oracle", "Microsoft", "CitiBank", "ST Electronics", "IBM", "Cyient"];

Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 





customText: string = "Pipes tend to act as more “utility” classes, so it’s likely you’ll want to register a Pipe inside a shared module. If you want to use your custom Pipe.";

file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };



items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  
selectedValue: string= 'One';  




}
