
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/menu', (req, res) => {
  res.render("./pages/menu");
});

export { router };
