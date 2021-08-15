import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  currentCatId!: number;
  
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {

    const hasCatId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCatId){
      const idStr: any = this.route.snapshot.paramMap.get('id');
      this.currentCatId = idStr != null? + idStr : 1;
    }else{
      this.currentCatId = 1;
    }

    this.productService.getProductList(this.currentCatId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
