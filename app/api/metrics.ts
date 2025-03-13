import { NextApiRequest, NextApiResponse } from 'next';
import { apiRequestCount, apiResponseTime, register } from '@/lib/metrics';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const start = Date.now();

  // Only track API routes
  if (req.method === 'GET' && req.url?.startsWith('/api')) {
    const duration = Date.now() - start;

    apiResponseTime.observe(
      {
        method: req.method,
        endpoint: req.url,
        status_code: res.statusCode
      },
      duration / 1000
    );

    apiRequestCount.inc({
      method: req.method,
      endpoint: req.url,
      status_code: res.statusCode
    });
  }

  try {
    const metrics = await register.metrics();
    res.setHeader('Content-Type', register.contentType);
    res.status(200).send(metrics);
  } catch (err) {
    res.status(500).send('Error collecting metrics');
  }
}