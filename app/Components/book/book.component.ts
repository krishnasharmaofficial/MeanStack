import { Component, OnInit } from '@angular/core';
import { BookService } from "../../Services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: any;
  selectedBook: any;
  id:number=0;
  title:string='';
  price:number=0;

  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.getAll().subscribe((res)=>this.allBooks=res);
  }

  addBook(){
    let newBook = {
      id:this.id,
      title:this.title,
      price:this.price
    }
    this.service.postBook(newBook).subscribe((res)=>{
      alert(res);
      console.log(res);
    })
  }
}
