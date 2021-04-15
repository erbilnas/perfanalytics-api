const PerfanalyticsModel = require('../models/perfanalytics.model')

exports.getMetricsFromLib = (req, res) => {
    let data = req.body

    if (!data.url && !data.date) {
        return res.status(400).send({
            message: "URL or date is missing!",
        })
    }

    const metric = new PerfanalyticsModel({
        url: data.url,
        date: data.date,
        ttfb: data.ttfb,
        fcp: data.fcp,
        domLoad: data.domLoad,
        windowLoad: data.windowLoad
    })

    metric.save()
        .then((success) => {
            res.send(success)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || "Some error occurred while saving data."
            })
        })
}