import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <input [(ngModel)]='meal.name'>
  <input [(ngModel)]='meal.description'>
  <label>Calories:</label>
  <input [(ngModel)]='meal.calories'>
  `
})
export class EditMealComponent {

}
