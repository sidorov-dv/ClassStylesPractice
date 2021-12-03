import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LCHooks';
  parentText = '<<Hello from PARENT!>>';

  arrNamesInParent = ['Dima', 'Alex', 'Vadim', 'Yegeniy'];

  addItemToParent(newItem: string) {
    this.arrNamesInParent.push(newItem);
  }

  tooltip: string = 'tooltip from attr binding';

  isColor: boolean = true;

}
