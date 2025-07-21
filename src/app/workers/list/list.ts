import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { Worker } from '../../worker';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  page = signal(1);
  limit = signal(10);
  workers = httpResource<Worker[]>(() => `https://6863e77388359a373e96ce2c.mockapi.io/api/workers?page=${this.page()}&limit=${this.limit()}`);

  columns = ['name', 'birthDate', 'job', 'experience', 'action'];

  changePage(pageEvent: PageEvent) {
    this.page.set(pageEvent.pageIndex + 1);
    this.limit.set(pageEvent.pageSize);
  }

}
