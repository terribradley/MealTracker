import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  template: `
  <div *ngFor="#keg of kegList">
    <h3>{{keg.brand}} - {{keg.name}}</h3>
    <h4>ABV: {{keg.alchoholByVolume}} Price: {{keg.price}}</h4>
  </div>
  `
})
export class KegListComponent {

}
