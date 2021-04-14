module.exports = (app) => {
    const metrics = require('../controllers/metrics.controller')

    app.post('/metrics', metrics.createMetric)
    app.get('/metrics', metrics.getMeasurement)
}