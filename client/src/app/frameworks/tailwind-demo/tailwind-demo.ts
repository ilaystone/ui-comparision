import { Component } from '@angular/core';
import { users } from '../shared/userTable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwind-demo',
  imports: [CommonModule],
  templateUrl: './tailwind-demo.html',
  styleUrl: './tailwind-demo.scss',
})
export class TailwindDemoComponent {
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
