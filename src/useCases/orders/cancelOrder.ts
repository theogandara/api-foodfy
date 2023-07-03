import { Request, Response } from 'express';

export function cancelOrder(req: Request, res: Response) {
  return res.send('ok');
}
