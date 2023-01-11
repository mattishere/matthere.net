import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animations', [
      transition('* => *', [
        style({ position: "relative" }),
        query(":enter", style({ opacity: 0 }), { optional: true }),
        group([
          query(":enter", animate(300, style({ opacity: 1 })), { optional: true }),
        ]),
      ])
    ])
  ]
})
export class AppComponent {

  prepareRoute(outlet: RouterOutlet) {
    if(outlet.isActivated) { return outlet.activatedRoute.snapshot.url } else return;
  }

}
