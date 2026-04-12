import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../open-id/auth.service';
import { LoggerService } from '../logger.service';
import { inject } from '@angular/core';

export const falconHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const logger = inject(LoggerService);

  const authToken = authService.getAuthorizationHeaderValue();
  logger.info('Found auth bearer token ', '*****************');

  if (authToken) {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    });
  }
  return next(req);
};
