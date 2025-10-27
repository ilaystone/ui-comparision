import { Component, ViewEncapsulation } from '@angular/core';
import { users } from '../shared/userTable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flowbite-demo',
  imports: [CommonModule],
  templateUrl: './flowbite-demo.html',
  styleUrl: './flowbite-demo.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FlowbiteDemo {
  public users = users;

  currentPage = 1;
  pageSize = 5;

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
