export interface MenuItems {
  title: string;
  href?: string;
  subItems?: MenuItems[];
}

export interface MenuItemsHeadline {
  title: string;
  subtitle: string;
}

export interface MenuFooter {
  title: string;
  href?: string;
}
