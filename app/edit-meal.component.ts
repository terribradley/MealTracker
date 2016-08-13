import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <form class="edit-meals">
    <label>Enter New Name:</label>
    <input [(ngModel)]='meal.name'>
    <label>Enter New Description:</label>
    <input [(ngModel)]='meal.description'>
    <label>Enter New Calories:</label>
    <input [(ngModel)]='meal.calories'>
  </form>
  `
})

export class EditMealComponent {
}
