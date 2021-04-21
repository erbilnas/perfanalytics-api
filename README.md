## Overview

A simple RESTful API, which saves data that from perfanalytics-js and returns time specific, filtered data.

## API Load Test Results

#### Description

This API has been tested with Postman's new feature, [The Collection Runner](https://learning.postman.com/docs/running-collections/intro-to-collection-runs/), 
using the most popular JavaScript proccess manager runtime, PM2.



#### Test Enviroment

- Model Name:	MacBook Pro (2017)
- Processor Name:	Dual-Core Intel Core i5
- Processor Speed:	2,3 GHz
- Number of Processors:	1
- Total Number of Cores:	2
- L2 Cache (per Core):	256 KB
- L3 Cache:	4 MB
- Hyper-Threading Technology:	Enabled
- Memory:	8 GB

#### GET /measures

```json
{
	"id": "d2f8416b-b178-4899-a14c-1ce0bf37642b",
	"name": "Perfanalytics",
	"timestamp": "2021-04-21T10:50:08.206Z",
	"collection_id": "462484a3-f71c-4525-b394-995db8944280",
	"folder_id": 0,
	"environment_id": "0",
	"totalPass": 200,
	"totalFail": 0,
	"results": [
		{
			"id": "0028aefd-916d-42ca-8155-50178babbb45",
			"name": "Get measures from the API (local)",
			"time": 5,
			"responseCode": {
				"code": 200,
				"name": "OK"
			},
			"tests": {
				"Status code is 200": true
			},
			"testPassFailCounts": {
				"Status code is 200": {
					"pass": 200,
					"fail": 0
				}
			},
			"times": [
				40,
				18,
				10,
				9,
				12,
				10,
				15,
				48,
				13,
				10,
				7,
				8,
				26,
				9,
				16,
				8,
				8,
				9,
				9,
				6,
				6,
				7,
				6,
				6,
				7,
				7,
				6,
				6,
				6,
				6,
				10,
				6,
				7,
				7,
				7,
				7,
				13,
				6,
				5,
				6,
				17,
				16,
				30,
				5,
				9,
				7,
				5,
				5,
				6,
				5,
				7,
				6,
				6,
				7,
				5,
				5,
				5,
				14,
				16,
				5,
				5,
				11,
				5,
				7,
				5,
				8,
				10,
				6,
				6,
				6,
				7,
				7,
				8,
				5,
				6,
				6,
				5,
				5,
				6,
				5,
				5,
				5,
				6,
				13,
				30,
				6,
				6,
				6,
				5,
				5,
				5,
				7,
				5,
				5,
				5,
				6,
				6,
				6,
				8,
				6,
				6,
				8,
				10,
				14,
				14,
				5,
				5,
				5,
				5,
				12,
				7,
				5,
				6,
				8,
				6,
				6,
				6,
				7,
				8,
				5,
				37,
				7,
				15,
				5,
				9,
				7,
				6,
				4,
				10,
				7,
				17,
				6,
				7,
				5,
				7,
				5,
				6,
				5,
				11,
				10,
				7,
				13,
				5,
				5,
				5,
				5,
				6,
				5,
				10,
				9,
				13,
				9,
				5,
				5,
				5,
				7,
				6,
				19,
				7,
				16,
				6,
				7,
				5,
				5,
				6,
				5,
				6,
				5,
				7,
				8,
				5,
				7,
				6,
				4,
				5,
				7,
				5,
				6,
				11,
				9,
				16,
				6,
				5,
				4,
				5,
				5,
				6,
				5,
				8,
				8,
				8,
				13,
				6,
				11,
				5,
				5,
				5,
				8,
				5,
				5
			],
			"allTests": [
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				},
				{
					"Status code is 200": true
				}
			]
		}
	],
	"count": 200,
	"totalTime": 1644,
	"collection": {
		"requests": [
			{
				"id": "0028aefd-916d-42ca-8155-50178babbb45",
				"method": "GET"
			}
		]
	}
}
```
