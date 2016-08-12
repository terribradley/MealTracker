import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
@Component ({
  selector: 'add-meal',
  outputs:['onSubmitNewMeal'],
  template:`
  <h1>Add another Meal</h1>
  <div class='meal-form '>
    <input placeholder="Name" #newName>
    <input placeholder="Meal Description" #newDescription>
    <input placeholder="Calories" #newCalories>
    <button (click)="addMeal(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})

export class AddMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement) {
    var newMeal = new Meal(newName.value, newDescription.value, parseInt(newCalories.value));
    newName.value = "";
    newDescription.value="";
    newCalories.value="";
    this.onSubmitNewMeal.emit(newMeal);
  }
}
