import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PopperDirective } from './popper.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PopperDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'popper-app';
}
