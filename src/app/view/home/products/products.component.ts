import { Component, OnInit } from '@angular/core';

import {MenuModule} from 'primeng/menu';
import {MenuItem, MessageService} from 'primeng/api';
interface Car {
    year;
    brand;
    color;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  cars: any[];
    cols: any[];
    display: boolean = false;

  private items: MenuItem[];
  constructor() { }
  showDialog() {
    this.display = true;
}
  ngOnInit() {

   
    this.cars = [
        { productName: 'Apple', category: '51%', stock: '40%', dateEntry: '$54,406.00', dateExit: '$43,342' },
        { productName: 'Samsung', category: '83%', stock: '96%', dateEntry: '$423,132', dateExit: '$312,122' },
        { productName: 'Microsoft', category: '38%', stock: '5%', dateEntry: '$12,321', dateExit: '$8,500' },
        { productName: 'Philips', category: '49%', stock: '22%', dateEntry: '$745,232', dateExit: '$650,323,' },
        { productName: 'Song', category: '17%', stock: '79%', dateEntry: '$643,242', dateExit: '500,332' },
        { productName: 'LG', category: '52%', stock: ' 65%', dateEntry: '$421,132', dateExit: '$150,005' },
        { productName: 'Sharp', category: '82%', stock: '12%', dateEntry: '$131,211', dateExit: '$100,214' },
        { productName: 'Panasonic', category: '44%', stock: '45%', dateEntry: '$66,442', dateExit: '$53,322' },
        { productName: 'HTC', category: '90%', stock: '56%', dateEntry: '$765,442', dateExit: '$296,232' },
        { productName: 'Toshiba', category: '75%', stock: '54%', dateEntry: '$21,212', dateExit: '$12,533' },
        { productName: 'Toshiba', category: '75%', stock: '54%', dateEntry: '$21,212', dateExit: '$12,533' }
    
    ];

    this.cols = [
        { field: 'productName', header: 'Produto' },
        {field: 'category', header: 'Categoria' },
        { field: 'stock', header: 'Estoque' },
        { field: 'dateEntry', header: 'Entrada' },
        { field: 'dateExit', header: 'Saida' },
        { field: 'quantity', header: 'Quantidade' }

    ];
  

  }

}
