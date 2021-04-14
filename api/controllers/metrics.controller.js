const Metrics = require('../models/metrics.model')

exports.createMetric = (req, res) => {
    let data = req.body

    if (!data.url && !data.date) {
        return res.status(400).send({
            message: "URL or date is missing!",
        })
    }

    const metric = new Metrics({
        url: data.url,
        date: data.date,
        metrics: [{
            connectEnd: data.metrics.connectEnd,
            connectStart: data.metrics.connectStart,
            domComplete: data.metrics.domComplete,
            domContentLoadedEventEnd: data.metrics.domContentLoadedEventEnd,
            domContentLoadedEventStart: data.metrics.domContentLoadedEventStart,
            domInteractive: data.metrics.domInteractive,
            domLoading: data.metrics.domLoading,
            domainLookupEnd: data.metrics.domainLookupEnd,
            domainLookupStart: data.metrics.domainLookupStart,
            fetchStart: data.metrics.fetchStart,
            loadEventEnd: data.metrics.loadEventEnd,
            loadEventStart: data.metrics.loadEventStart,
            navigationStart: data.metrics.navigationStart,
            redirectEnd: data.metrics.redirectEnd,
            redirectStart: data.metrics.redirectStart,
            requestStart: data.metrics.requestStart,
            responseEnd: data.metrics.responseEnd,
            responseStart: data.metrics.responseStart,
            secureConnectionStart: data.metrics.secureConnectionStart,
            unloadEventEnd: data.metrics.unloadEventEnd,
            unloadEventStart: data.metrics.unloadEventStart,
        }]
    })

    metric.save()
        .then((success) => {
            res.send(success)
        }).catch((error) => {
            res.status(500).send({
                message: error.message || "Some error occurred while saving data."
            })
        })
}

exports.getMeasurement = (req, res) => {

}