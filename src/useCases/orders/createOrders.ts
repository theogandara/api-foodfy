import { Request, Response } from 'express';
import { Order } from '../../app/Order';

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products,
    });

    return res.status(201).json(order);
  } catch {
    return res.sendStatus(500);
  }
}
