import { Request, Response } from 'express';
import { Category } from '../../app/Category';

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find();

  res.json(categories);
}
