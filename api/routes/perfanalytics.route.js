module.exports = (app) => {
    const perfanalyticsController = require('../controllers/perfanalytics.controller')

    app.post('/metrics', perfanalyticsController.getMetricsFromLib)
}