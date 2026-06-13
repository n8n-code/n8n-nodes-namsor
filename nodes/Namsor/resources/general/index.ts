import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Name Type",
					"value": "Name Type",
					"action": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
					"description": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/nameType/{{$parameter[\"properNoun\"]}}"
						}
					}
				},
				{
					"name": "Name Type Batch",
					"value": "Name Type Batch",
					"action": "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)",
					"description": "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/nameTypeBatch"
						}
					}
				},
				{
					"name": "Name Type Geo",
					"value": "Name Type Geo",
					"action": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
					"description": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/nameTypeGeo/{{$parameter[\"properNoun\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				},
				{
					"name": "Name Type Geo Batch",
					"value": "Name Type Geo Batch",
					"action": "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)",
					"description": "Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/nameTypeGeoBatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/nameType/{properNoun}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type"
					]
				}
			}
		},
		{
			"displayName": "Proper Noun",
			"name": "properNoun",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type"
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
						"General"
					],
					"operation": [
						"Name Type"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/nameTypeBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Batch"
					]
				}
			}
		},
		{
			"displayName": "Facts",
			"name": "facts",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "facts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Batch"
					]
				}
			}
		},
		{
			"displayName": "Proper Nouns",
			"name": "properNouns",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "properNouns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Batch"
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
						"General"
					],
					"operation": [
						"Name Type Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/nameTypeGeo/{properNoun}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo"
					]
				}
			}
		},
		{
			"displayName": "Proper Noun",
			"name": "properNoun",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo"
					]
				}
			}
		},
		{
			"displayName": "Country Iso 2",
			"name": "countryIso2",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo"
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
						"General"
					],
					"operation": [
						"Name Type Geo"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/nameTypeGeoBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "Facts",
			"name": "facts",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "facts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "Proper Nouns",
			"name": "properNouns",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "properNouns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Name Type Geo Batch"
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
						"General"
					],
					"operation": [
						"Name Type Geo Batch"
					]
				}
			}
		},
];
