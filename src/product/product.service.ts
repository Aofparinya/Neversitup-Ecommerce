import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './Schemas/product.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    
    // get all product
    async getAllProduct() : Promise<Product[]> {
        return this.productModel.find().exec();
    }

    // get specific product
    async getProductById(id:number) : Promise<Product> {
        return this.productModel.findById(id).exec();
    }
}
