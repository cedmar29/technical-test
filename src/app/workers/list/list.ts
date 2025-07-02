import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Worker } from '../../worker';

@Component({
  selector: 'app-list',
  imports: [
    RouterModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

  workers = httpResource<Worker[]>(() => `https://6863e77388359a373e96ce2c.mockapi.io/api/workers`);

}
