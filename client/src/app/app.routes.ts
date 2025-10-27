import { Routes } from '@angular/router';
import { BootstrapDemoComponent } from './frameworks/bootstrap-demo/bootstrap-demo';
import { TailwindDemoComponent } from './frameworks/tailwind-demo/tailwind-demo';
import { FlowbiteDemo } from './frameworks/flowbite-demo/flowbite-demo';
import { DaisyuiDemo } from './frameworks/daisyui-demo/daisyui-demo';

export const routes: Routes = [
  { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
  { path: 'bootstrap', component: BootstrapDemoComponent },
  { path: 'tailwind', component: TailwindDemoComponent },
  { path: 'flowbite', component: FlowbiteDemo },
  { path: 'daisyui', component: DaisyuiDemo },
];
