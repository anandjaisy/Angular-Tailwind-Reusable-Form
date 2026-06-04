import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appearance } from '../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Button } from '@falcon-ng/core';
import { AuthService } from '../../projects/falcon-ng/tailwind/src/lib/service/open-id/auth.service';
import { FalconTailwindModule } from '../../projects/falcon-ng/tailwind/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FalconTailwindModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  title = 'Dynamic form builder';
  currentYear = new Date().getFullYear();
  signInButtonConfig = new Button({
    label: 'Sign in',
    appearance: Appearance.Raised,
    color: 'primary',
    class: 'flex justify-center',
  });
  signOutButtonConfig = new Button({
    label: 'Sign out',
    appearance: Appearance.Raised,
    color: 'primary',
    class: 'flex justify-center',
  });
  constructor(public authService: AuthService) {}
  SignInclick() {
    this.authService.isServiceReady().then(() => {
      this.authService.startAuthentication('/');
    });
  }

  SignOutclick() {
    this.authService.isServiceReady().then(() => {
      this.authService.logout();
    });
  }
}
