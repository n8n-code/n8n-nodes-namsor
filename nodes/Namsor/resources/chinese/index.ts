import type { INodeProperties } from 'n8n-workflow';

export const chineseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					]
				}
			},
			"options": [
				{
					"name": "Chinese Name Candidates",
					"value": "Chinese Name Candidates",
					"action": "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming",
					"description": "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/chineseNameCandidates/{{$parameter[\"chineseSurnameLatin\"]}}/{{$parameter[\"chineseGivenNameLatin\"]}}"
						}
					}
				},
				{
					"name": "Chinese Name Candidates Batch",
					"value": "Chinese Name Candidates Batch",
					"action": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
					"description": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/chineseNameCandidatesBatch"
						}
					}
				},
				{
					"name": "Chinese Name Candidates Gender Batch",
					"value": "Chinese Name Candidates Gender Batch",
					"action": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.",
					"description": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/chineseNameCandidatesGenderBatch"
						}
					}
				},
				{
					"name": "Chinese Name Gender Candidates",
					"value": "Chinese Name Gender Candidates",
					"action": "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')",
					"description": "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/chineseNameGenderCandidates/{{$parameter[\"chineseSurnameLatin\"]}}/{{$parameter[\"chineseGivenNameLatin\"]}}/{{$parameter[\"knownGender\"]}}"
						}
					}
				},
				{
					"name": "Chinese Name Match",
					"value": "Chinese Name Match",
					"action": "Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming",
					"description": "Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/chineseNameMatch/{{$parameter[\"chineseSurnameLatin\"]}}/{{$parameter[\"chineseGivenNameLatin\"]}}/{{$parameter[\"chineseName\"]}}"
						}
					}
				},
				{
					"name": "Chinese Name Match Batch",
					"value": "Chinese Name Match Batch",
					"action": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
					"description": "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/chineseNameMatchBatch"
						}
					}
				},
				{
					"name": "Gender Chinese Name",
					"value": "Gender Chinese Name",
					"action": "Infer the likely gender of a Chinese full name ex. 王晓明",
					"description": "Infer the likely gender of a Chinese full name ex. 王晓明",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderChineseName/{{$parameter[\"chineseName\"]}}"
						}
					}
				},
				{
					"name": "Gender Chinese Name Batch",
					"value": "Gender Chinese Name Batch",
					"action": "Infer the likely gender of up to 100 full names ex. 王晓明",
					"description": "Infer the likely gender of up to 100 full names ex. 王晓明",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderChineseNameBatch"
						}
					}
				},
				{
					"name": "Gender Chinese Name Pinyin",
					"value": "Gender Chinese Name Pinyin",
					"action": "Infer the likely gender of a Chinese name in LATIN (Pinyin).",
					"description": "Infer the likely gender of a Chinese name in LATIN (Pinyin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderChineseNamePinyin/{{$parameter[\"chineseSurnameLatin\"]}}/{{$parameter[\"chineseGivenNameLatin\"]}}"
						}
					}
				},
				{
					"name": "Gender Chinese Name Pinyin Batch",
					"value": "Gender Chinese Name Pinyin Batch",
					"action": "Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).",
					"description": "Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderChineseNamePinyinBatch"
						}
					}
				},
				{
					"name": "Parse Chinese Name",
					"value": "Parse Chinese Name",
					"action": "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)",
					"description": "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/parseChineseName/{{$parameter[\"chineseName\"]}}"
						}
					}
				},
				{
					"name": "Parse Chinese Name Batch",
					"value": "Parse Chinese Name Batch",
					"action": "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).",
					"description": "Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/parseChineseNameBatch"
						}
					}
				},
				{
					"name": "Pinyin Chinese Name",
					"value": "Pinyin Chinese Name",
					"action": "Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)",
					"description": "Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/pinyinChineseName/{{$parameter[\"chineseName\"]}}"
						}
					}
				},
				{
					"name": "Pinyin Chinese Name Batch",
					"value": "Pinyin Chinese Name Batch",
					"action": "Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).",
					"description": "Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/pinyinChineseNameBatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates"
					]
				}
			}
		},
		{
			"displayName": "Chinese Surname Latin",
			"name": "chineseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates"
					]
				}
			}
		},
		{
			"displayName": "Chinese Given Name Latin",
			"name": "chineseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/chineseNameCandidatesBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/chineseNameCandidatesGenderBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Gender Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Gender Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Gender Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Candidates Gender Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Gender Candidates"
					]
				}
			}
		},
		{
			"displayName": "Chinese Surname Latin",
			"name": "chineseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Gender Candidates"
					]
				}
			}
		},
		{
			"displayName": "Chinese Given Name Latin",
			"name": "chineseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Gender Candidates"
					]
				}
			}
		},
		{
			"displayName": "Known Gender",
			"name": "knownGender",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Gender Candidates"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Gender Candidates"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Chinese Surname Latin",
			"name": "chineseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Chinese Given Name Latin",
			"name": "chineseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Chinese Name",
			"name": "chineseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Match"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Match"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/chineseNameMatchBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Chinese Name Match Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Match Batch"
					]
				}
			}
		},
		{
			"displayName": "Personal Names",
			"name": "personalNames",
			"type": "json",
			"default": "[\n  {\n    \"name1\": {},\n    \"name2\": {}\n  }\n]",
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Match Batch"
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
						"Chinese"
					],
					"operation": [
						"Chinese Name Match Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderChineseName/{chineseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "Chinese Name",
			"name": "chineseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderChineseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "Chinese Surname Latin",
			"name": "chineseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "Chinese Given Name Latin",
			"name": "chineseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderChineseNamePinyinBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin Batch"
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
						"Chinese"
					],
					"operation": [
						"Gender Chinese Name Pinyin Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/parseChineseName/{chineseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "Chinese Name",
			"name": "chineseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name"
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
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/parseChineseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Parse Chinese Name Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/pinyinChineseName/{chineseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "Chinese Name",
			"name": "chineseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name"
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
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/pinyinChineseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name Batch"
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
						"Chinese"
					],
					"operation": [
						"Pinyin Chinese Name Batch"
					]
				}
			}
		},
];
