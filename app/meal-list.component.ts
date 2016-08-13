import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { AddMealComponent } from './add-meal.component';
// import {CalorieAmountPipe} from './calorie-amount.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent, AddMealComponent],
  // pipes: [CalorieAmountPipe],
  template: `
      <add-meal (onSubmitNewMeal)="createMeal($event)"></add-meal>
      <h2>This is everything you had today</h2>
    <section class="meal-list">
    <meal-display *ngFor="#currentmeal of mealList" [meal]="currentmeal">
    </meal-display>
    </section>
    <section class="filter-meals">
    <h3>Filter my Meals by Calories</h3>
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show All</option>
        <option value="highCalorie">Show high Calorie Meals</option>
        <option value="lowCalorie">Show Low Calorie Meals</option>
      </select>
    </section>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedCalorieCount: string = "all";
  createMeal(Meal: Meal) {
    this.mealList.push(Meal);
  }
  onChange(optionFromMenu: string) {
    this.selectedCalorieCount = optionFromMenu;
  }
}

// | calorie-amount:selectedCalorieCount"
