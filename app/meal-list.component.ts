import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { AddMealComponent } from './add-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent, AddMealComponent],
  template: `
  <meal-display *ngFor="#currentmeal of mealList" [meal]='currentmeal'>
  </meal-display>
  <add-meal (onSubmitNewMeal)="createMeal($event)"></add-meal>
  `
})
export class MealListComponent {
   public mealList: Meal[]
   createMeal(Meal: Meal) {
    this.mealList.push(Meal);
  }
}
