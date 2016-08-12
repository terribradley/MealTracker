import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent],
  template: `
  <meal-display *ngFor="#currentmeal of mealList" [meal]='currentmeal'>
  </meal-display>
  `
})
export class MealListComponent {

}
