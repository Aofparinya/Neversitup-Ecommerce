import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop()
    id: number;

    @Prop({ required: true })
    name: string;

    @Prop({ slug: 'name', unique: true, index: true })
    slug: string;

    @Prop()
    details: string;

}

export const CategorySchema = SchemaFactory.createForClass(Product);