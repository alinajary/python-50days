import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCardComponent } from '../../components/day-card/day-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DayCardComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  projects = [
    { day: 1, title: 'Personal Profile', description: 'Display personal information' },
    { day: 2, title: 'Calculator', description: 'Simple arithmetic operations' }
  ];

  onCardClick(day: number) {
    console.log(`Card for Day ${day} clicked!`);
    this.router.navigate([`/day${day}`]); // Navigate programmatically
  }
}
