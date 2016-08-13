import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie-amount",
  pure: false
})
export class CalorieAmountPipe implements PipeTransform {
  transform(input: Meal[], args) {
    if(args[0] === "highCalorie") {
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else if (args[0] === "lowCalorie") {
      return input.filter((meal) => {
        return meal.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
