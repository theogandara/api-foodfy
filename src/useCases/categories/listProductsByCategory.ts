import { Request, Response } from 'express';
import { Product } from '../../app/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const products = await Product.find().where('category').equals(categoryId);

    return res.json(products);
  } catch {
    return res.sendStatus(500);
  }
}
