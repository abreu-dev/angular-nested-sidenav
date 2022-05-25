import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { animateText } from 'src/assets/animations/animate-text';
import { onIndicatorRotate } from 'src/assets/animations/on-indicator-rotate';
import { onSideNavChange } from 'src/assets/animations/on-side-nav-change';
import { SidenavItem } from '../sidenav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [onSideNavChange, animateText, onIndicatorRotate]
})
export class SidenavComponent implements OnInit {
  public sideNavState: boolean = true;
  public linkText: boolean = true;
  public sidenavItems: SidenavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'desktop_mac',
      route: 'dashboard',
      expanded: false
    },
    {
      displayName: 'Catalog',
      iconName: 'library_books',
      route: 'catalog',
      expanded: false,
      children: [
        {
          displayName: 'Categories',
          iconName: 'group',
          route: 'catalog/categories',
          expanded: false
        },
        {
          displayName: 'Products',
          iconName: 'group',
          route: 'catalog/products',
          expanded: false
        }
      ]
    }
  ];

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState;



    setTimeout(() => {
      this.linkText = this.sideNavState;

      if (!this.linkText) {
        this.sidenavItems.forEach(item => {
          item.expanded = false;
        })
      }
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

  public onItemSelected(item: SidenavItem) {
    if (this.linkText && item.children && item.children.length) {
      item.expanded = !item.expanded;
    }
  }
}
