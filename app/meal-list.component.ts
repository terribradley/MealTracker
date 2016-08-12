import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { AddMealComponent } from './add-meal.component';
// import {CalorieAmountPipe} from './calorie-amount.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  // pipes: [CalorieAmountPipe],
  directives: [MealDisplayComponent, AddMealComponent],
  template: `
    <add-meal (onSubmitNewMeal)="createMeal($event)"></add-meal>
    <meal-display *ngFor="#currentmeal of mealList" [meal]='currentmeal'>
    </meal-display>
  `
})
export class MealListComponent {
  public mealList: Meal[]
  public selectedCalorieCount: string = "lowCalorie";
  createMeal(Meal: Meal) {
    this.mealList.push(Meal);
  }
  onChange(optionFromMenu) {
  this.selectedCalorieCount = optionFromMenu;
  console.log(this.selectedCalorieCount);
  }
}

// <h3>Filter my Meals by Calories</h3>
//   <select (change)="onChange($event.target.value)">
//     <option value="all">Show All</option>
//     <option value="highCalorie">Show high Calorie Meals</option>
//     <option value="lowCalorie" selected="selected">Show Low Calorie Meals</option>
//   </select>
