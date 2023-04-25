import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {

    @Prop()
    id: number;

    @Prop({ required: true })
    productID: number;

    @Prop()
    productName: string;

    @Prop()
    productDetails: string;

}

export const CategorySchema = SchemaFactory.createForClass(Order);