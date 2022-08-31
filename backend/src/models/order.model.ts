import { model, Schema, Types } from "mongoose";
import { Food, FoodSchema } from "./food.model";

export interface LatLng {
  lat: string;
  lng: string;
}

export const LatLngSchema = new Schema<LatLng>({
  lat: { type: String, required: true },
  lng: { type: String, required: true },
});

export interface OrderItem {
  food: Food;
  price: number;
  quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>({
  food: { type: FoodSchema, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export interface Order {
  id: number;
  name: string;
  items: OrderItem[];
  totalPrice: number;
  address: string;
  paymentId: string;
  orderNumber: string;
  user: Types.ObjectId;
  orderDate: Date;
}

const OrderSchema = new Schema<Order>({
  items: { type: [OrderItemSchema], required: true },
  totalPrice: { type: Number, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  paymentId: { type: String, required: true },
  orderNumber: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true },
  orderDate: { type: Date, required: true },
},
{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }

});


export const OrderModel = model("order", OrderSchema);