import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  data = [
    { name: 'Leonardo', age: 41, job: 'Developer' },
    { name: 'James', job: 'Engineer', age: 24 },
    { name: 'Jill', age: 26, job: 'Designer' },
    { name: 'Elyse', age: 31, job: 'Engineer' }
  ]
  headers = [
    { key: 'name', value: "Name" },
    { key: 'age', value: 'Age' },
    { key: 'job', value: 'Job' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
