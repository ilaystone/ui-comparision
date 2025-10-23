import { Routes } from '@angular/router';
import { BootstrapDemoComponent } from './frameworks/bootstrap-demo/bootstrap-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
  { path: 'bootstrap', component: BootstrapDemoComponent },
];
