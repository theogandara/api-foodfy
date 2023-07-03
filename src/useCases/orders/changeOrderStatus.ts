import { Request, Response } from 'express';

export function changeOrderStatus(req: Request, res: Response) {
  return res.send('ok');
}
