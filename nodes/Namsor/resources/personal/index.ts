import type { INodeProperties } from 'n8n-workflow';

export const personalDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					]
				}
			},
			"options": [
				{
					"name": "Corridor",
					"value": "Corridor",
					"action": "[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)",
					"description": "[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/corridor/{{$parameter[\"countryIso2From\"]}}/{{$parameter[\"firstNameFrom\"]}}/{{$parameter[\"lastNameFrom\"]}}/{{$parameter[\"countryIso2To\"]}}/{{$parameter[\"firstNameTo\"]}}/{{$parameter[\"lastNameTo\"]}}"
						}
					}
				},
				{
					"name": "Corridor Batch",
					"value": "Corridor Batch",
					"action": "[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)",
					"description": "[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/corridorBatch"
						}
					}
				},
				{
					"name": "Country",
					"value": "Country",
					"action": "[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/country/{{$parameter[\"personalNameFull\"]}}"
						}
					}
				},
				{
					"name": "Country Batch",
					"value": "Country Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/countryBatch"
						}
					}
				},
				{
					"name": "Diaspora",
					"value": "Diaspora",
					"action": "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
					"description": "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/diaspora/{{$parameter[\"countryIso2\"]}}/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Diaspora Batch",
					"value": "Diaspora Batch",
					"action": "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
					"description": "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/diasporaBatch"
						}
					}
				},
				{
					"name": "Gender",
					"value": "Gender",
					"action": "Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.",
					"description": "Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/gender/{{$parameter[\"firstName\"]}}"
						}
					}
				},
				{
					"name": "Gender 1",
					"value": "Gender 1",
					"action": "Infer the likely gender of a name.",
					"description": "Infer the likely gender of a name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/gender/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Gender Batch",
					"value": "Gender Batch",
					"action": "Infer the likely gender of up to 100 names, detecting automatically the cultural context.",
					"description": "Infer the likely gender of up to 100 names, detecting automatically the cultural context.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderBatch"
						}
					}
				},
				{
					"name": "Gender Full",
					"value": "Gender Full",
					"action": "Infer the likely gender of a full name, ex. John H. Smith",
					"description": "Infer the likely gender of a full name, ex. John H. Smith",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderFull/{{$parameter[\"fullName\"]}}"
						}
					}
				},
				{
					"name": "Gender Full Batch",
					"value": "Gender Full Batch",
					"action": "Infer the likely gender of up to 100 full names, detecting automatically the cultural context.",
					"description": "Infer the likely gender of up to 100 full names, detecting automatically the cultural context.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderFullBatch"
						}
					}
				},
				{
					"name": "Gender Full Geo",
					"value": "Gender Full Geo",
					"action": "Infer the likely gender of a full name, given a local context (ISO2 country code).",
					"description": "Infer the likely gender of a full name, given a local context (ISO2 country code).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderFullGeo/{{$parameter[\"fullName\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				},
				{
					"name": "Gender Full Geo Batch",
					"value": "Gender Full Geo Batch",
					"action": "Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).",
					"description": "Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderFullGeoBatch"
						}
					}
				},
				{
					"name": "Gender Geo",
					"value": "Gender Geo",
					"action": "Infer the likely gender of a name, given a local context (ISO2 country code).",
					"description": "Infer the likely gender of a name, given a local context (ISO2 country code).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderGeo/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				},
				{
					"name": "Gender Geo Batch",
					"value": "Gender Geo Batch",
					"action": "Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).",
					"description": "Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderGeoBatch"
						}
					}
				},
				{
					"name": "Origin",
					"value": "Origin",
					"action": "[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/origin/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Origin Batch",
					"value": "Origin Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/originBatch"
						}
					}
				},
				{
					"name": "Parse Name",
					"value": "Parse Name",
					"action": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. ",
					"description": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/parseName/{{$parameter[\"nameFull\"]}}"
						}
					}
				},
				{
					"name": "Parse Name Geo",
					"value": "Parse Name Geo",
					"action": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.",
					"description": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/parseName/{{$parameter[\"nameFull\"]}}/{{$parameter[\"countryIso2\"]}}"
						}
					}
				},
				{
					"name": "Parse Name Batch",
					"value": "Parse Name Batch",
					"action": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.",
					"description": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/parseNameBatch"
						}
					}
				},
				{
					"name": "Parse Name Geo Batch",
					"value": "Parse Name Geo Batch",
					"action": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ",
					"description": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/parseNameGeoBatch"
						}
					}
				},
				{
					"name": "Religion Full",
					"value": "Religion Full",
					"action": "[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).",
					"description": "[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/religionFull/{{$parameter[\"countryIso2\"]}}/{{$parameter[\"subDivisionIso31662\"]}}/{{$parameter[\"personalNameFull\"]}}"
						}
					}
				},
				{
					"name": "Religion Full Batch",
					"value": "Religion Full Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.",
					"description": "[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/religionFullBatch"
						}
					}
				},
				{
					"name": "Subclassification",
					"value": "Subclassification",
					"action": "[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
					"description": "[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/subclassification/{{$parameter[\"countryIso2\"]}}/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Subclassification Batch",
					"value": "Subclassification Batch",
					"action": "[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
					"description": "[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/subclassificationBatch"
						}
					}
				},
				{
					"name": "Us Race Ethnicity",
					"value": "Us Race Ethnicity",
					"action": "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"description": "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/usRaceEthnicity/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}"
						}
					}
				},
				{
					"name": "Us Race Ethnicity Batch",
					"value": "Us Race Ethnicity Batch",
					"action": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"description": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/usRaceEthnicityBatch"
						}
					}
				},
				{
					"name": "Us Race Ethnicity ZIP 5",
					"value": "Us Race Ethnicity ZIP 5",
					"action": "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"description": "[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/usRaceEthnicityZIP5/{{$parameter[\"firstName\"]}}/{{$parameter[\"lastName\"]}}/{{$parameter[\"zip5Code\"]}}"
						}
					}
				},
				{
					"name": "Us Zip Race Ethnicity Batch",
					"value": "Us Zip Race Ethnicity Batch",
					"action": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"description": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/usZipRaceEthnicityBatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "Country Iso 2 From",
			"name": "countryIso2From",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "First Name From",
			"name": "firstNameFrom",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "Last Name From",
			"name": "lastNameFrom",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "Country Iso 2 To",
			"name": "countryIso2To",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "First Name To",
			"name": "firstNameTo",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "Last Name To",
			"name": "lastNameTo",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor"
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
						"Personal"
					],
					"operation": [
						"Corridor"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/corridorBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor Batch"
					]
				}
			}
		},
		{
			"displayName": "Corridor From To",
			"name": "corridorFromTo",
			"type": "json",
			"default": "[\n  {\n    \"firstLastNameGeoFrom\": {},\n    \"firstLastNameGeoTo\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "corridorFromTo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Corridor Batch"
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
						"Personal"
					],
					"operation": [
						"Corridor Batch"
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
						"Personal"
					],
					"operation": [
						"Corridor Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/country/{personalNameFull}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Country"
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
						"Personal"
					],
					"operation": [
						"Country"
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
						"Personal"
					],
					"operation": [
						"Country"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/countryBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Country Batch"
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
						"Personal"
					],
					"operation": [
						"Country Batch"
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
						"Personal"
					],
					"operation": [
						"Country Batch"
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
						"Personal"
					],
					"operation": [
						"Country Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/diaspora/{countryIso2}/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Diaspora"
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
						"Personal"
					],
					"operation": [
						"Diaspora"
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
						"Personal"
					],
					"operation": [
						"Diaspora"
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
						"Personal"
					],
					"operation": [
						"Diaspora"
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
						"Personal"
					],
					"operation": [
						"Diaspora"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/diasporaBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Diaspora Batch"
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
						"Personal"
					],
					"operation": [
						"Diaspora Batch"
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
						"Personal"
					],
					"operation": [
						"Diaspora Batch"
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
						"Personal"
					],
					"operation": [
						"Diaspora Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/gender/{firstName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender"
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
						"Personal"
					],
					"operation": [
						"Gender"
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
						"Personal"
					],
					"operation": [
						"Gender"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/gender/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender 1"
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
						"Personal"
					],
					"operation": [
						"Gender 1"
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
						"Personal"
					],
					"operation": [
						"Gender 1"
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
						"Personal"
					],
					"operation": [
						"Gender 1"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderFull/{fullName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full"
					]
				}
			}
		},
		{
			"displayName": "Full Name",
			"name": "fullName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full"
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
						"Personal"
					],
					"operation": [
						"Gender Full"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderFullBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderFullGeo/{fullName}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full Geo"
					]
				}
			}
		},
		{
			"displayName": "Full Name",
			"name": "fullName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Full Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Full Geo"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderFullGeoBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Full Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Full Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Geo"
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
						"Personal"
					],
					"operation": [
						"Gender Geo"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderGeoBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Gender Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Gender Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/origin/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Origin"
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
						"Personal"
					],
					"operation": [
						"Origin"
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
						"Personal"
					],
					"operation": [
						"Origin"
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
						"Personal"
					],
					"operation": [
						"Origin"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/originBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Origin Batch"
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
						"Personal"
					],
					"operation": [
						"Origin Batch"
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
						"Personal"
					],
					"operation": [
						"Origin Batch"
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
						"Personal"
					],
					"operation": [
						"Origin Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/parseName/{nameFull}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name"
					]
				}
			}
		},
		{
			"displayName": "Name Full",
			"name": "nameFull",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name"
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
						"Personal"
					],
					"operation": [
						"Parse Name"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/parseName/{nameFull}/{countryIso2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name Geo"
					]
				}
			}
		},
		{
			"displayName": "Name Full",
			"name": "nameFull",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name Geo"
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
						"Personal"
					],
					"operation": [
						"Parse Name Geo"
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
						"Personal"
					],
					"operation": [
						"Parse Name Geo"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/parseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/parseNameGeoBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Parse Name Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Geo Batch"
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
						"Personal"
					],
					"operation": [
						"Parse Name Geo Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/religionFull/{countryIso2}/{subDivisionIso31662}/{personalNameFull}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Religion Full"
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
						"Personal"
					],
					"operation": [
						"Religion Full"
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
						"Personal"
					],
					"operation": [
						"Religion Full"
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
						"Personal"
					],
					"operation": [
						"Religion Full"
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
						"Personal"
					],
					"operation": [
						"Religion Full"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/religionFullBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Religion Full Batch"
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
						"Personal"
					],
					"operation": [
						"Religion Full Batch"
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
						"Personal"
					],
					"operation": [
						"Religion Full Batch"
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
						"Personal"
					],
					"operation": [
						"Religion Full Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/subclassification/{countryIso2}/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Subclassification"
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
						"Personal"
					],
					"operation": [
						"Subclassification"
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
						"Personal"
					],
					"operation": [
						"Subclassification"
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
						"Personal"
					],
					"operation": [
						"Subclassification"
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
						"Personal"
					],
					"operation": [
						"Subclassification"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/subclassificationBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Subclassification Batch"
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
						"Personal"
					],
					"operation": [
						"Subclassification Batch"
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
						"Personal"
					],
					"operation": [
						"Subclassification Batch"
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
						"Personal"
					],
					"operation": [
						"Subclassification Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/usRaceEthnicity/{firstName}/{lastName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/usRaceEthnicityBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity ZIP 5"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity ZIP 5"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity ZIP 5"
					]
				}
			}
		},
		{
			"displayName": "Zip 5 Code",
			"name": "zip5Code",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity ZIP 5"
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
						"Personal"
					],
					"operation": [
						"Us Race Ethnicity ZIP 5"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/usZipRaceEthnicityBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Personal"
					],
					"operation": [
						"Us Zip Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Zip Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Zip Race Ethnicity Batch"
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
						"Personal"
					],
					"operation": [
						"Us Zip Race Ethnicity Batch"
					]
				}
			}
		},
];
