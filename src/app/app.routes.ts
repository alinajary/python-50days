import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DayCardComponent } from './components/day-card/day-card.component';

export const routes: Routes = [
    { 
    path: '', 
    component: DashboardComponent,
    title: 'Dashboard'
    },
    { 
    path: 'day1', 
    component: DayCardComponent,
    title: 'Day 1 - Personal Info' 
    }
];