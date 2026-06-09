import type { INodeProperties } from 'n8n-workflow';

export const indianDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					]
				}
			},
			"options": [
				{
					"name": "Castegroup Indian Full",
					"value": "Castegroup Indian Full",
					"action": "[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/castegroupIndianFull/{{$parameter[\"subDivisionIso31662\"]}}/{{$parameter[\"personalNameFull\"]}}"
						}
					}
				},
				{
					"name": "Castegroup Indian Full Batch",
					"value": "Castegroup Indian Full Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. ",
					"description": "[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/castegroupIndianFullBatch"
						}
					}
				},
				{
					"name": "Religion",
					"value": "Religion",
					"action": "[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).",
					"description": "[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/religionIndianFull/{{$parameter[\"subDivisionIso31662\"]}}/{{$parameter[\"personalNameFull\"]}}"
						}
					}
				},
				{
					"name": "Religion Indian Full Batch",
					"value": "Religion Indian Full Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).",
					"description": "[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/religionIndianFullBatch"
						}
					}
				},
				{
					"name": "Subclassification Indian",
					"value": "Subclassification Indian",
					"action": "[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/subclassificationIndian/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Subclassification Indian Batch",
					"value": "Subclassification Indian Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/subclassificationIndianBatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/castegroupIndianFull/{subDivisionIso31662}/{personalNameFull}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full"
					]
				}
			}
		},
		{
			"displayName": "Sub Division Iso 31662",
			"name": "subDivisionIso31662",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full"
					]
				}
			}
		},
		{
			"displayName": "Personal Name Full",
			"name": "personalNameFull",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full"
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
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/castegroupIndianFullBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full Batch"
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
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names",
			"name": "personalNames",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "personalNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full Batch"
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
						"Indian"
					],
					"operation": [
						"Castegroup Indian Full Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/religionIndianFull/{subDivisionIso31662}/{personalNameFull}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Religion"
					]
				}
			}
		},
		{
			"displayName": "Sub Division Iso 31662",
			"name": "subDivisionIso31662",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Religion"
					]
				}
			}
		},
		{
			"displayName": "Personal Name Full",
			"name": "personalNameFull",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Religion"
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
						"Indian"
					],
					"operation": [
						"Religion"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/religionIndianFullBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Religion Indian Full Batch"
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
						"Indian"
					],
					"operation": [
						"Religion Indian Full Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names",
			"name": "personalNames",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "personalNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Religion Indian Full Batch"
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
						"Indian"
					],
					"operation": [
						"Religion Indian Full Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/subclassificationIndian/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Subclassification Indian"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Subclassification Indian"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Subclassification Indian"
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
						"Indian"
					],
					"operation": [
						"Subclassification Indian"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/subclassificationIndianBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Subclassification Indian Batch"
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
						"Indian"
					],
					"operation": [
						"Subclassification Indian Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names",
			"name": "personalNames",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "personalNames",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Indian"
					],
					"operation": [
						"Subclassification Indian Batch"
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
						"Indian"
					],
					"operation": [
						"Subclassification Indian Batch"
					]
				}
			}
		},
];
