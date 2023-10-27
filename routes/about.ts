import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/about', (req: Request, res: Response) => {
  res.render('./pages/about');
});

export { router };
