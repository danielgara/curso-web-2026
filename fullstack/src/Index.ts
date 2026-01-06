import express from 'express';
import type { Application } from 'express';
import Routes from './routes/Routes.js';

class Index {
  static startServer(): void {
    const app: Application = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(Routes.initializeRoutes());
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

Index.startServer();