import { Component } from '@angular/core';
import {
  Appearance,
  Control,
} from '../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { AuthService } from '../../projects/falcon-ng/tailwind/src/lib/service/open-id/auth.service';
import { Button } from '@falcon-ng/core';
import { RouterModule } from '@angular/router';
import { FalconTailwindModule } from '../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, FalconTailwindModule]
})
export class AppComponent {
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
