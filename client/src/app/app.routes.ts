import { Routes } from '@angular/router';
import { BootstrapDemoComponent } from './frameworks/bootstrap-demo/bootstrap-demo';
import { TailwindDemoComponent } from './frameworks/tailwind-demo/tailwind-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
  { path: 'bootstrap', component: BootstrapDemoComponent },
  {path: 'tailwind', component: TailwindDemoComponent}
];
