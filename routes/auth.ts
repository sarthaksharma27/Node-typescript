import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';

const prisma = new PrismaClient();
const router: Router = Router();

// Login route
router.get('/auth', (req: Request, res: Response) => {
  res.render("./pages/login");
});

// Registration route
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.redirect("/")
});

// Success route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    res.redirect("/login"); 
  } else {
    res.send("success"); 
  }
});

export { router };













