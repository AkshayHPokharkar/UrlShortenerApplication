import { Component } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {

  isCustomExpiry = false;
  expiryTypeDate = true;
  destination = "";
  title = "";
  metadata = "";

  date = new Date();
  days = 0;

  changeDate(e: any){
    this.date = e.target.value;
    console.log(this.date)
  }

  changeDays(e:any){
    this.days = e.target.value;
    console.log(this.days)
  }

  constructor() { }

  toggleCustomExpiry() {
    this.isCustomExpiry = !this.isCustomExpiry;
  }

  toggleExpiryTypeTrue() {
    this.expiryTypeDate = true;
  }

  toggleExpiryTypeFalse() {
    this.expiryTypeDate = false;
  }

  changeDestination(e:any){
    this.destination = e.target.value;
    console.table(this.destination);
  }
  changeTitle(t:any){
   this.title=t.target.value;
   console.table(this.title);
  }

  changeMetadata(e:any){
    this.metadata = e.target.value;
    console.log(this.metadata);
  }
  
  createLink() {
    console.log('destination', this.destination);
    console.log('title', this.title);
    console.log('metadata', this.metadata);
    alert('Link created');
  }
}
