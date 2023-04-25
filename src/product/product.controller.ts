import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor (private readonly productService: ProductService) {}

    // view all product
    @Get('all')
    getAllProduct() {
        return this.productService.getAllProduct();
    }

    // view product by id 
    @Get('product/id')
    getProductById(@Param() id:number) {
        return this.productService.getProductById(id);
    }



}
