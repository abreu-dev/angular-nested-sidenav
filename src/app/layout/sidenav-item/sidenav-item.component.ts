import { Component, Input, OnInit } from '@angular/core';
import { animateText } from 'src/assets/animations/animate-text';
import { onIndicatorRotate } from 'src/assets/animations/on-indicator-rotate';
import { SidenavItem } from '../sidenav-item';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [onIndicatorRotate, animateText]
})
export class SidenavItemComponent implements OnInit {
  public expanded: boolean = false;

  @Input() item!: SidenavItem;
  @Input() depth: number = 0;

  @Input() linkText!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public onItemSelected(item: SidenavItem) {
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
