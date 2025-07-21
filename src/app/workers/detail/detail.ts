import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { Worker } from '../../worker';

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {

  private activatedRoute = inject(ActivatedRoute);

  workerId = signal('');
  worker = httpResource<Worker>(() => `https://6863e77388359a373e96ce2c.mockapi.io/api/workers/${this.workerId()}`);

  columns = ['job', 'date', 'company', 'location', 'action'];

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.workerId.set(params['workerId']);
    });
  }

}
