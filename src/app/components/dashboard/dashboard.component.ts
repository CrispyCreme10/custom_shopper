import { Component, OnInit } from '@angular/core';

type ProductCategory = 'Management' | 'Settings';

interface BusinessProduct {
  name: string;
  desc: string;
  category: ProductCategory;
  tags: string[];
}

const debug_products: BusinessProduct[] = [
  {
    name: 'Inventory',
    desc: 'Manage all of your products in one easy to use solution.',
    category: 'Management',
    tags: ['Business Owners']
  },
  {
    name: 'Themes',
    desc: 'Customize various theme presets for your Shop and Admin pages!',
    category: 'Settings',
    tags: ['Business Owners', 'Storefront']
  },
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: BusinessProduct[] = debug_products;
  
  ngOnInit(): void {
    
  }
}
