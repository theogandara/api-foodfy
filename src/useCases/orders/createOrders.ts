import { Request, Response } from 'express';
import { Order } from '../../app/Order';

export async function createOrders(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const product = await Order.create({
      name,
      icon,
    });

    return res.status(201).json(product);
  } catch {
    return res.sendStatus(500);
  }
}
