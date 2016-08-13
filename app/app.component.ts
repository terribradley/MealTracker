import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="main-content">
    <meal-list [mealList]="meals"></meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    var newMeal = new Meal("Hamburger", "Ate all of it, no fries", 700);
    var newMeal2 = new Meal("Salad with Chicken", "Mix greens with roasted chicken, peas, and balsamic dressing", 400);
    var newMeal3 = new Meal("Salmon with Rice and Vegetables", "Steamed Salmon, brown rice, grilled asparagus", 550);
    this.meals = [newMeal, newMeal2, newMeal3];
  }
}
