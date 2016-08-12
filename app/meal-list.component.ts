import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <div *ngFor="#meal of mealList">
    <h3>{{meal.name}} - {{meal.description}}</h3>
    <h4>Calories: {{meal.calories}}
  </div>
  `
})
export class mealListComponent {

}
