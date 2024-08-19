import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(private route: Router) {
  
  }
  @Input() isOpen: boolean = true;

  closeDialog() {
    this.route.navigate(['/login'])
    // this.isOpen = false;
  }

}
