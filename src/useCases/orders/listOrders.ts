import { Request, Response } from 'express';
import { Order } from '../../app/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find();

    return res.json(orders);
  } catch {
    return res.sendStatus(500);
  }
}
