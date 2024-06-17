import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop()
  makeId: number;

  @Prop()
  makeName: string;

  @Prop()
  vehicleTypes: any[];
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
