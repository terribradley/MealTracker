import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
    <section class="meal-list">
      <div class="meal-content">
        <h3>{{ meal.name }}</h3>
        <h4>{{ meal.description }}</h4>
        <h4>Calories: {{ meal.calories }}</h4>
        <button *ngIf="!beingEdited" (click)="toggleEditMeal()">Edit</button>
        <button *ngIf="beingEdited" (click)="toggleEditMeal()">Done</button>
      </div>
      <edit-meal *ngIf="beingEdited" [meal]="meal"></edit-meal>
    </section>
  `
})

export class MealDisplayComponent {
  public meal: Meal;
  public beingEdited: boolean = false;
  toggleEditMeal() {
   this.beingEdited = (!this.beingEdited);
 }
}
