import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  res.render("./pages/index");
});

export { router };
