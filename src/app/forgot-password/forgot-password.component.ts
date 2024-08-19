import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DialogComponent } from '../reusable/dialog/dialog.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, DialogComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  isopen: boolean = false;

  confirmation(event: Event){
    event.preventDefault()
    this.isopen = true ;
  }

}
