import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMobile = false;

  menuItems = [
    { icon: 'pi pi-th-large', label: 'Dashboard' },
    { icon: 'pi pi-users', label: 'All Employees' },
    { icon: 'pi pi-sitemap', label: 'All Departments' },
    { icon: 'pi pi-calendar', label: 'Attendance' },
    { icon: 'pi pi-wallet', label: 'Payroll' },
    { icon: 'pi pi-briefcase', label: 'Jobs' },
    { icon: 'pi pi-user-plus', label: 'Candidates' },
    { icon: 'pi pi-calendar-times', label: 'Leaves' },
    { icon: 'pi pi-calendar-plus', label: 'Holidays' },
    { icon: 'pi pi-cog', label: 'Settings' }
  ];

  toggleSidebar() {
    this.isMobile = !this.isMobile;
  }
}
