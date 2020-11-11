import {Component,Inject} from '@angular/core';
import { navItems } from '../../_nav';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
  )
    {
    }

  logout(){
    this.storage.set('current_time_logout', new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    this.router.navigateByUrl('/');
  }
}
