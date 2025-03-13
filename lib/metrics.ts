import client from 'prom-client'

const register = new client.Registry()

// Add default labels
register.setDefaultLabels({
  app: 'nextjs-app'
})

// Page Load Time
export const pageLoadTime = new client.Histogram({
  name: 'nextjs_page_load_seconds',
  help: 'Time taken to load pages',
  labelNames: ['page'],
  buckets: [0.1, 0.5, 1, 2, 5]
})

// Manually define your metrics
export const apiResponseTime = new client.Histogram({
  name: 'nextjs_api_response_seconds',
  help: 'API response time in seconds',
  labelNames: ['method', 'endpoint', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 1, 2]
})

// API Request Counter
export const apiRequestCount = new client.Counter({
  name: 'nextjs_api_requests_total',
  help: 'Count of API requests',
  labelNames: ['method', 'endpoint', 'status_code']
})

// Error Counter
export const errorCount = new client.Counter({
  name: 'nextjs_errors_total',
  help: 'Count of errors',
  labelNames: ['type', 'message']
})

// Register all metrics
register.registerMetric(pageLoadTime)
register.registerMetric(apiResponseTime)
register.registerMetric(apiRequestCount)
register.registerMetric(errorCount)

export { register } 