import { EnvironmentViewModel } from '../../projects/falcon-ng/tailwind/src/lib/model/environments';

class EnvironmentImpl implements EnvironmentViewModel {
  production = false;
  openID = {
    authority: 'http://127.0.0.1:5001/auth/realms/FeteBird/',
    client_id: 'fetebird_ai',
    redirect_uri: 'http://localhost:4200/auth-callback/',
    silent_redirect_uri: 'http://localhost:4200/assets/silent-renew.html/',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: 'code',
    scope: 'openid profile email',
    automaticSilentRenew: true,
  };
  baseUrl =
    'https://raw.githubusercontent.com/anandjaisy/Angular-Tailwind-Reusable-Form/main/src/app/';
  snackBarEnable = true;
}

export const environment = new EnvironmentImpl();
