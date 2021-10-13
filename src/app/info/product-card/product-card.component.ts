import { Component, Input, OnInit } from '@angular/core';

import { Producto } from 'src/app/interface/Producto';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() producto!: Producto;

  constructor() {}

  ngOnInit(): void {}
}
