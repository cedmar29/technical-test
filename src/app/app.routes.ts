import { Routes } from '@angular/router';

import { Detail } from './workers/detail/detail';
import { List } from './workers/list/list';

export const routes: Routes = [
  { path: '', component: List },
  { path: ':workerId', component: Detail }
];
