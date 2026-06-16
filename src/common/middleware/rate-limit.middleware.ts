import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private requests = new Map<string, number[]>();
  private limit = 100; // requests
  private window = 15 * 60 * 1000; // 15 minutes

  use(req: Request, res: Response, next: NextFunction) {
    const key = req.ip || 'unknown';
    const now = Date.now();
    const requests = this.requests.get(key) || [];

    const recentRequests = requests.filter(time => now - time < this.window);

    if (recentRequests.length >= this.limit) {
      return res.status(429).json({ message: 'Too many requests' });
    }

    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    next();
  }
}
