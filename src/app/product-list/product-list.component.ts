import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(): void {
    window.alert('Le produit a été partagé');
  }

  onNotify(): void {
    window.alert('Vous serez notifié quand le produit sera en solde!');
  }
}

