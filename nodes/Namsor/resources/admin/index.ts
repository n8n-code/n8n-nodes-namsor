import type { INodeProperties } from 'n8n-workflow';

export const adminDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					]
				}
			},
			"options": [
				{
					"name": "Anonymize",
					"value": "Anonymize",
					"action": "Activate/deactivate anonymization for a source.",
					"description": "Activate/deactivate anonymization for a source.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/anonymize/{{$parameter[\"source\"]}}/{{$parameter[\"anonymized\"]}}/{{$parameter[\"token\"]}}"
						}
					}
				},
				{
					"name": "Api Key Info",
					"value": "Api Key Info",
					"action": "Read API Key info.",
					"description": "Read API Key info.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiKeyInfo"
						}
					}
				},
				{
					"name": "Available Services",
					"value": "Available Services",
					"action": "List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.",
					"description": "List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiServices"
						}
					}
				},
				{
					"name": "Api Status",
					"value": "Api Status",
					"action": "Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.",
					"description": "Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiStatus"
						}
					}
				},
				{
					"name": "Api Usage",
					"value": "Api Usage",
					"action": "Print current API usage.",
					"description": "Print current API usage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiUsage"
						}
					}
				},
				{
					"name": "Api Usage History",
					"value": "Api Usage History",
					"action": "Print historical API usage.",
					"description": "Print historical API usage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiUsageHistory"
						}
					}
				},
				{
					"name": "Api Usage History Aggregate",
					"value": "Api Usage History Aggregate",
					"action": "Print historical API usage (in an aggregated view, by service, by day/hour/min).",
					"description": "Print historical API usage (in an aggregated view, by service, by day/hour/min).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/apiUsageHistoryAggregate"
						}
					}
				},
				{
					"name": "Learnable",
					"value": "Learnable",
					"action": "Activate/deactivate learning from a source.",
					"description": "Activate/deactivate learning from a source.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/learnable/{{$parameter[\"source\"]}}/{{$parameter[\"learnable\"]}}/{{$parameter[\"token\"]}}"
						}
					}
				},
				{
					"name": "Regions",
					"value": "Regions",
					"action": "Print basic source statistics.",
					"description": "Print basic source statistics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/regions"
						}
					}
				},
				{
					"name": "Software Version",
					"value": "Software Version",
					"action": "Get the current software version",
					"description": "Get the current software version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/softwareVersion"
						}
					}
				},
				{
					"name": "Taxonomy Classes",
					"value": "Taxonomy Classes",
					"action": "Print the taxonomy classes valid for the given classifier.",
					"description": "Print the taxonomy classes valid for the given classifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/taxonomyClasses/{{$parameter[\"classifierName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/anonymize/{source}/{anonymized}/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Anonymized",
			"name": "anonymized",
			"required": true,
			"default": true,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Anonymize"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Anonymize"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiKeyInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Key Info"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Key Info"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiServices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Available Services"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Available Services"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Status"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Status"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiUsageHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage History"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage History"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/apiUsageHistoryAggregate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage History Aggregate"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Api Usage History Aggregate"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/learnable/{source}/{learnable}/{token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Learnable"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"required": true,
			"description": "The API Key to set as learnable/non learnable.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Learnable"
					]
				}
			}
		},
		{
			"displayName": "Learnable",
			"name": "learnable",
			"required": true,
			"default": true,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Learnable"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Learnable"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Learnable"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/regions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Regions"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Regions"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/softwareVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Software Version"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Software Version"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/taxonomyClasses/{classifierName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Taxonomy Classes"
					]
				}
			}
		},
		{
			"displayName": "Classifier Name",
			"name": "classifierName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Taxonomy Classes"
					]
				}
			}
		},
		{
			"displayName": "X API KEY (Header)",
			"name": "security_api_key",
			"type": "string",
			"default": "",
			"description": "api_key required",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-KEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin"
					],
					"operation": [
						"Taxonomy Classes"
					]
				}
			}
		},
];
