// import { Pipe, PipeTransform } from 'angular2/core';
// import { Meal } from './meal.model';
//
// @Pipe({
//   name: "calorie-amount",
//   pure: false
// })
// export class CalorieAmountPipe implements PipeTransform {
//     transform(input: Meal[], args) {
//       var calorie = args[3]
//       var calorieFiler: Meal[] =[]
//       if (calorie > 500) return meals;
//       if(calorieFilter === "All") {
//         return input;
//       } else {
//         return input.filter((meal) => (meal.calorie > 500) === highCalorie));
//       }
//   }
// }
//
// for (var i = 0; i < input.length; i++) {
//     if (input[i].highcalorie === false) {
//       output.push(input[i]);
//     }
//   }
//   return output;
// }
// //   export class CategoryPipe implements PipeTransform {
// //   transform(input: Task[], args) {
// //     var desiredCategory = args[0];
// //     if(desiredCategory === "All") {
// //       return input;
// //     } else {
// //       return input.filter((task) => (task.category === desiredCategory));
// //     }
// //   }
// // }
