import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, CurrencyPipe, PercentPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { TimeFormatPipe } from './time-format.pipe';
import { TextListComponent } from './text-list/text-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    UpperCasePipe,
    LowerCasePipe,
    TimeFormatPipe,
    TextListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-ejemplo';
  today: Date = new Date();
  price: number = 2599.99;
  rate: number = 0.756;
  name: string = 'Angular';
  timeInSeconds: number = 125;
}
