export interface SidenavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  expanded: boolean;
  children?: SidenavItem[];
}
