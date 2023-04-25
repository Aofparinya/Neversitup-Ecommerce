import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class User {

    @Prop({ required: true, index: true, unique: true })
    email: string;

    @Prop({ select: false })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);