import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../../../projects/falcon-ng/tailwind/src/lib/service/appsetting.service';
import { AuthService } from '../../../projects/falcon-ng/tailwind/src/lib/service/open-id/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../projects/falcon-ng/tailwind/src/lib/service/logger.service';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss'],
  standalone: true,
  imports: [FalconTailwindModule, CodeGeneratorComponent, HighlightModule],
})
export class AuthCallbackComponent implements OnInit {
  private completed: boolean;
  constructor(
    private appSettings: AppSettingService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.appSettings.on(AppSettingService.APP_SETTINGS_LOADED, () => {
      this.completeAuthentication();
    });
    if (this.appSettings.initialized) {
      await this.completeAuthentication();
    }
  }

  async completeAuthentication() {
    await this.authService.userManager.signinCallback();
    this.router.navigate(['']);
  }
}
