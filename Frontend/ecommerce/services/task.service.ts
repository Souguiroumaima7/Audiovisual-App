import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';


const authConfig: AuthConfig = {
issuer: 'https://auth-server.com',
redirectUri: window.location.origin,
clientId: 'angular-client',
scope: 'openid profile email',
responseType: 'code'
};


@Injectable({ providedIn: 'root' })
export class AuthService {
constructor(private oauthService: OAuthService) {
this.oauthService.configure(authConfig);
this.oauthService.loadDiscoveryDocumentAndTryLogin();
}
login() { this.oauthService.initLoginFlow(); }
logout() { this.oauthService.logOut(); }
get token() { return this.oauthService.getAccessToken(); }
}
