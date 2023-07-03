import { Request, Response } from 'express';
import { Product } from '../../app/Product';

export async function createProducts(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const product = await Product.create({
      name,
      icon,
    });

    return res.status(201).json(product);
  } catch {
    return res.sendStatus(500);
  }
}
