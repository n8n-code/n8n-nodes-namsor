import type { INodeProperties } from 'n8n-workflow';

export const japaneseDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					]
				}
			},
			"options": [
				{
					"name": "Gender Japanese Name Pinyin",
					"value": "Gender Japanese Name Pinyin",
					"action": "Infer the likely gender of a Japanese name in LATIN (Pinyin).",
					"description": "Infer the likely gender of a Japanese name in LATIN (Pinyin).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderJapaneseName/{{$parameter[\"japaneseSurname\"]}}/{{$parameter[\"japaneseGivenName\"]}}"
						}
					}
				},
				{
					"name": "Gender Japanese Name Pinyin Batch",
					"value": "Gender Japanese Name Pinyin Batch",
					"action": "Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).",
					"description": "Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderJapaneseNameBatch"
						}
					}
				},
				{
					"name": "Gender Japanese Name Full",
					"value": "Gender Japanese Name Full",
					"action": "Infer the likely gender of a Japanese full name ex. 王晓明",
					"description": "Infer the likely gender of a Japanese full name ex. 王晓明",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/genderJapaneseNameFull/{{$parameter[\"japaneseName\"]}}"
						}
					}
				},
				{
					"name": "Gender Japanese Name Full Batch",
					"value": "Gender Japanese Name Full Batch",
					"action": "Infer the likely gender of up to 100 full names",
					"description": "Infer the likely gender of up to 100 full names",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/genderJapaneseNameFullBatch"
						}
					}
				},
				{
					"name": "Japanese Name Gender Kanji Candidates Batch",
					"value": "Japanese Name Gender Kanji Candidates Batch",
					"action": "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae",
					"description": "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/japaneseNameGenderKanjiCandidatesBatch"
						}
					}
				},
				{
					"name": "Japanese Name Kanji Candidates",
					"value": "Japanese Name Kanji Candidates",
					"action": "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae",
					"description": "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/japaneseNameKanjiCandidates/{{$parameter[\"japaneseSurnameLatin\"]}}/{{$parameter[\"japaneseGivenNameLatin\"]}}"
						}
					}
				},
				{
					"name": "Japanese Name Kanji Candidates 1",
					"value": "Japanese Name Kanji Candidates 1",
					"action": "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.",
					"description": "Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/japaneseNameKanjiCandidates/{{$parameter[\"japaneseSurnameLatin\"]}}/{{$parameter[\"japaneseGivenNameLatin\"]}}/{{$parameter[\"knownGender\"]}}"
						}
					}
				},
				{
					"name": "Japanese Name Kanji Candidates Batch",
					"value": "Japanese Name Kanji Candidates Batch",
					"action": "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae",
					"description": "Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/japaneseNameKanjiCandidatesBatch"
						}
					}
				},
				{
					"name": "Japanese Name Latin Candidates",
					"value": "Japanese Name Latin Candidates",
					"action": "Romanize japanese name, based on the name in Kanji.",
					"description": "Romanize japanese name, based on the name in Kanji.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/japaneseNameLatinCandidates/{{$parameter[\"japaneseSurnameKanji\"]}}/{{$parameter[\"japaneseGivenNameKanji\"]}}"
						}
					}
				},
				{
					"name": "Japanese Name Latin Candidates Batch",
					"value": "Japanese Name Latin Candidates Batch",
					"action": "Romanize japanese names, based on the name in KANJI",
					"description": "Romanize japanese names, based on the name in KANJI",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/japaneseNameLatinCandidatesBatch"
						}
					}
				},
				{
					"name": "Japanese Name Match",
					"value": "Japanese Name Match",
					"action": "Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
					"description": "Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/japaneseNameMatch/{{$parameter[\"japaneseSurnameLatin\"]}}/{{$parameter[\"japaneseGivenNameLatin\"]}}/{{$parameter[\"japaneseName\"]}}"
						}
					}
				},
				{
					"name": "Japanese Name Match Batch",
					"value": "Japanese Name Match Batch",
					"action": "Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae",
					"description": "Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/japaneseNameMatchBatch"
						}
					}
				},
				{
					"name": "Japanese Name Match Feedback Loop",
					"value": "Japanese Name Match Feedback Loop",
					"action": "[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
					"description": "[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/japaneseNameMatchFeedbackLoop/{{$parameter[\"japaneseSurnameLatin\"]}}/{{$parameter[\"japaneseGivenNameLatin\"]}}/{{$parameter[\"japaneseName\"]}}"
						}
					}
				},
				{
					"name": "Parse Japanese Name",
					"value": "Parse Japanese Name",
					"action": "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae",
					"description": "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api2/json/parseJapaneseName/{{$parameter[\"japaneseName\"]}}"
						}
					}
				},
				{
					"name": "Parse Japanese Name Batch",
					"value": "Parse Japanese Name Batch",
					"action": "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae ",
					"description": "Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api2/json/parseJapaneseNameBatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname",
			"name": "japaneseSurname",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name",
			"name": "japaneseGivenName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderJapaneseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Pinyin Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/genderJapaneseNameFull/{japaneseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full"
					]
				}
			}
		},
		{
			"displayName": "Japanese Name",
			"name": "japaneseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/genderJapaneseNameFullBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full Batch"
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
						"Japanese"
					],
					"operation": [
						"Gender Japanese Name Full Batch"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/japaneseNameGenderKanjiCandidatesBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Gender Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Gender Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Gender Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Gender Kanji Candidates Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname Latin",
			"name": "japaneseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name Latin",
			"name": "japaneseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates 1"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname Latin",
			"name": "japaneseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates 1"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name Latin",
			"name": "japaneseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates 1"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates 1"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates 1"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/japaneseNameKanjiCandidatesBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Kanji Candidates Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname Kanji",
			"name": "japaneseSurnameKanji",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name Kanji",
			"name": "japaneseGivenNameKanji",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/japaneseNameLatinCandidatesBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Latin Candidates Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname Latin",
			"name": "japaneseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name Latin",
			"name": "japaneseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match"
					]
				}
			}
		},
		{
			"displayName": "Japanese Name",
			"name": "japaneseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Match"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/japaneseNameMatchBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Batch"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Batch"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "Japanese Surname Latin",
			"name": "japaneseSurnameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "Japanese Given Name Latin",
			"name": "japaneseGivenNameLatin",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "Japanese Name",
			"name": "japaneseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Feedback Loop"
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
						"Japanese"
					],
					"operation": [
						"Japanese Name Match Feedback Loop"
					]
				}
			}
		},
		{
			"displayName": "GET /api2/json/parseJapaneseName/{japaneseName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name"
					]
				}
			}
		},
		{
			"displayName": "Japanese Name",
			"name": "japaneseName",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name"
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
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name"
					]
				}
			}
		},
		{
			"displayName": "POST /api2/json/parseJapaneseNameBatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name Batch"
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
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name Batch"
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
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name Batch"
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
						"Japanese"
					],
					"operation": [
						"Parse Japanese Name Batch"
					]
				}
			}
		},
];
