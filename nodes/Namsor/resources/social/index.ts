import type { INodeProperties } from 'n8n-workflow';

export const socialDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					]
				}
			},
			"options": [
				{
					"name": "Phone Code",
					"value": "Phone Code",
					"action": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.",
					"description": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/phoneCode/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}/{{$parameter[\"phoneNumber\"]}}"
						}
					}
				},
				{
					"name": "Phone Code Batch",
					"value": "Phone Code Batch",
					"action": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.",
					"description": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/phoneCodeBatch"
						}
					}
				},
				{
					"name": "Phone Code Geo",
					"value": "Phone Code Geo",
					"action": "[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
					"description": "[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/phoneCodeGeo/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}/{{$parameter[\"phoneNumber\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				},
				{
					"name": "Phone Code Geo Batch",
					"value": "Phone Code Geo Batch",
					"action": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).",
					"description": "[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/phoneCodeGeoBatch"
						}
					}
				},
				{
					"name": "Phone Code Geo Feedback Loop",
					"value": "Phone Code Geo Feedback Loop",
					"action": "[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
					"description": "[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/phoneCodeGeoFeedbackLoop/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}/{{$parameter[\"phoneNumber\"]}}/{{$parameter[\"phoneNumberE164\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code"
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
						"Social"
					],
					"operation": [
						"Phone Code"
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
						"Social"
					],
					"operation": [
						"Phone Code"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code"
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
						"Social"
					],
					"operation": [
						"Phone Code"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/phoneCodeBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Batch"
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
						"Social"
					],
					"operation": [
						"Phone Code Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names With Phone Numbers",
			"name": "personalNamesWithPhoneNumbers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "personalNamesWithPhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Batch"
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
						"Social"
					],
					"operation": [
						"Phone Code Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/phoneCodeGeoBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo Batch"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names With Phone Numbers",
			"name": "personalNamesWithPhoneNumbers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "personalNamesWithPhoneNumbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo Batch"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "Phone Number E 164",
			"name": "phoneNumberE164",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
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
						"Social"
					],
					"operation": [
						"Phone Code Geo Feedback Loop"
					]
				}
			}
		},
];
