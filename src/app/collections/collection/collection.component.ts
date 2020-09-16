import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  data = [
    { name: 'Leonardo', age: 41, job: 'Developer' },
    { name: 'James', age: 24, job: 'Engineer' },
    { name: 'Jill', age: 26, job: 'Designer' },
    { name: 'Elyse', age: 31, job: 'Engineer' }
  ]
  headers = [
    { key: 'name', value: "Nmae" },
    { key: 'age', valur: 'Age' },
    { key: 'job', value: 'Job' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
