import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class SidenavService {
  public sideNavState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
}
