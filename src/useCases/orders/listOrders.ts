import { Request, Response } from 'express';
import { Order } from '../../app/Order';

export async function listOrders(req: Request, res: Response) {
  const orders = await Order.find();

  res.json(orders);
}
