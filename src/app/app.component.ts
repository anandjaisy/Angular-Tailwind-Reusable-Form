import {Component} from '@angular/core';
import {Appearance, ControlType} from "../../projects/falcon-ng/tailwind/src/lib/model/enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic form builder';
  currentYear = new Date().getFullYear();
  signInButtonConfig = {
    componentProperty: {
      label: 'Sign in',
      appearance: Appearance.Raised,
    },
    componentType: ControlType.Button,
    formControlName: 'Basic',
  };
  signOutButtonConfig = {
    componentProperty: {
      label: 'Sign out',
      appearance: Appearance.Raised,
    },
    componentType: ControlType.Button,
    formControlName: 'Basic',
  };

  SignInclick() {
//    this.authService.isServiceReady().then(() => {
//      this.authService.startAuthentication('/');
//    });
  }

  SignOutclick() {
//    this.authService.isServiceReady().then(() => {
//      this.authService.logout();
//    });
  }
}
