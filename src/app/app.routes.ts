import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'enter',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'enter',
    loadComponent: () =>
      import('./components/enter/enter.component').then(
        (m) => m.EnterComponent
      ),
  },
  {
    path: 'thankyou',
    loadComponent: () =>
      import('./components/thankyou/thankyou.component').then(
        (m) => m.ThankyouComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
];
