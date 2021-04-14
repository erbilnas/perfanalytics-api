const mongoose = require('mongoose');

const MetricSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    metrics: [{
        connectEnd: {
            type: Number,
        },
        connectStart: {
            type: Number,
        },
        domComplete: {
            type: Number,
        },
        domContentLoadedEventEnd: {
            type: Number,
        },
        domContentLoadedEventStart: {
            type: Number,
        },
        domInteractive: {
            type: Number,
        },
        domLoading: {
            type: Number,
        },
        domainLookupEnd: {
            type: Number,
        },
        domainLookupStart: {
            type: Number,
        },
        fetchStart: {
            type: Number,
        },
        loadEventEnd: {
            type: Number,
        },
        loadEventStart: {
            type: Number,
        },
        navigationStart: {
            type: Number,
        },
        redirectEnd: {
            type: Number,
        },
        redirectStart: {
            type: Number,
        },
        requestStart: {
            type: Number,
        },
        responseEnd: {
            type: Number,
        },
        responseStart: {
            type: Number,
        },
        secureConnectionStart: {
            type: Number,
        },
        unloadEventEnd: {
            type: Number,
        },
        unloadEventStart: {
            type: Number,
        },
    }]
});

module.exports = mongoose.model('Metrics', MetricSchema);