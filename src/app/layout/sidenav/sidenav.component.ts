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
      iconName: 'dashboard',
      route: '/dashboard',
      expanded: false
    },
    {
      displayName: 'Catalog',
      iconName: 'library_books',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Categories',
          iconName: 'radio_button_checked',
          route: '/catalog/categories',
          expanded: false
        },
        {
          displayName: 'Products',
          iconName: 'radio_button_checked',
          route: '/catalog/products',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Payments',
      iconName: 'attach_money',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'PayPal',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Sales',
      iconName: 'shopping_cart',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Orders',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Shipments',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Customers',
      iconName: 'person',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Customers',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Vendors',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Promotions',
      iconName: 'bookmark',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Discounts',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Affiliates',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Configuration',
      iconName: 'settings',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Settings',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Countries',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Language',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'System',
      iconName: 'memory',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Log',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Themes',
          iconName: 'radio_button_checked',
          route: '/catalog/products',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Reports',
      iconName: 'trending_up',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Sales',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'Stock',
          iconName: 'radio_button_checked',
          expanded: false
        }
      ]
    },
    {
      displayName: 'Help',
      iconName: 'device_unknown',
      route: undefined,
      expanded: false,
      children: [
        {
          displayName: 'Documentation',
          iconName: 'radio_button_checked',
          expanded: false
        },
        {
          displayName: 'About Us',
          iconName: 'radio_button_checked',
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

  public onItemSelected(itemS: SidenavItem) {
    if (this.linkText && itemS.children && itemS.children.length) {
      this.sidenavItems.forEach(item => {
        if (item != itemS)
        item.expanded = false;
      })

      itemS.expanded = !itemS.expanded;
    }
  }
}
