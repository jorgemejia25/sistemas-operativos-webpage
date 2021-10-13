import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/interface/Producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [
    {
      nombre: 'Windows 10',
      rutaImagen:
        'https://static.kemikcdn.com/2015/12/microsoft_fqc_08930_windows_pro_10_64_1168588.jpg',
      descripcion: 'Clave de activación para Windows 10.',
      precio: 1650,
    },
    {
      nombre: 'Windows 10 Pro',
      rutaImagen:
        'https://latiendadelaslicencias.com/496-large_default/licencia-oem-original-windows-10-pro-profesional-32-64-bit-.jpg',
      descripcion: 'Clave de activación para Windows 10.',
      precio: 1150,
    },
    {
      nombre: 'Avast Antivirus',
      rutaImagen:
        'https://zonaprogramas.com/wp-content/uploads/2020/03/avast-2020.jpg',
      descripcion: 'Clave de activación para Avast Antivirus.',
      precio: 650,
    },
    {
      nombre: 'Avast Antivirus',
      rutaImagen:
        'https://hpstore.com.pe/wp-content/uploads/2020/05/ANTIVIRUS-ESET-NOD32.jpg',
      descripcion: 'Clave de activación para Eset Antivirus.',
      precio: 650,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
