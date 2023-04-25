import { Injectable } from '@nestjs/common';
import { Mode } from 'fs';
import { OrderDto } from './dto/order.dto';
import { Model } from 'mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@Injectable()
export class OrderService {

    constructor(
        private orderModel: Model<OrderDto>
    ) { }


    // create order 
    async createOrder(orderDto: OrderDto) {
        const order = new this.orderModel();
        order.id = orderDto.id;
        order.productID = orderDto.id;
        order.productName = orderDto.productName;
        order.productDetails = orderDto.productDetails;
        return order.save()
    }

    // cancle order
    async cancleOrderById(id:number) {
        const order = this.orderModel.findByIdAndRemove(id).exec();
    }


    // view order 
    async viewOrderDetail(id: number) {
        const order = this.orderModel.findById(id).exec();

        if (order != null) {
            return { order };
        } else {
            throw new ExceptionsHandler();
        }
    }
}
