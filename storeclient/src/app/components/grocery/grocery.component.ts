import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
  	console.log(this.router.snapshot.params);
  }

}
