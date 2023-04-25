import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {

    constructor (private readonly orderService: OrderService) {}

    // create order detail
    @Post('create-order')
    createOrder(@Body() orderDto: OrderDto){
        return this.orderService.createOrder(orderDto);
    }

    // cancle order detail
    @Delete('cancle/id')
    cancleOrderById(@Param() id:number) {
        return this.orderService.cancleOrderById(id);
    }

    // view order detail 
    @Get('order/id')
    viewOrderDetail(@Param() id:number) {
        return this.orderService.viewOrderDetail(id);
    }
        
}
