import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
  <h3>{{ meal.name }}</h3>
  <h4>{{ meal.description }}</h4>
  <h4>Calories: {{ meal.calories }}</h4>
  <button *ngIf="!beingEdited" (click)="toggleEditMeal()">Edit</button>
     <button *ngIf="beingEdited" (click)="toggleEditMeal()">Done</button>
  <edit-meal *ngIf="beingEdited" [meal]="meal"></edit-meal>
  `
})

export class MealDisplayComponent {
  public meal: Meal;
  public beingEdited: boolean = false;
  toggleEditMeal() {
   this.beingEdited = (!this.beingEdited);
 }
}
