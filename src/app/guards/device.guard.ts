import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DeviceUtil } from '@utils/device.util';


@Injectable({
  providedIn: 'root',
})
export class DeviceGuard implements CanActivate {
  isMobile: boolean;
  constructor(private router: Router) {
    this.isMobile = DeviceUtil.isMobile();
  }

  canActivate(): boolean {
    if (this.isMobile) {
      this.router.navigate(['/mobile-login']);
      return false;
    } else {
      this.router.navigate(['/web-login']);
      return false;
    }
  }
}
