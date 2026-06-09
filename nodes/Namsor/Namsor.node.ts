import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { personalDescription } from './resources/personal';
import { socialDescription } from './resources/social';
import { chineseDescription } from './resources/chinese';
import { japaneseDescription } from './resources/japanese';
import { indianDescription } from './resources/indian';
import { adminDescription } from './resources/admin';
import { generalDescription } from './resources/general';

export class Namsor implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'namsor',
		name: 'N8nDevNamsor',
		icon: { light: 'file:./namsor.png', dark: 'file:./namsor.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classif..',
		defaults: { name: 'namsor' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNamsorApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Personal",
					"value": "Personal",
					"description": "Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy"
				},
				{
					"name": "Social",
					"value": "Social",
					"description": "Social media and pseudonyms"
				},
				{
					"name": "Chinese",
					"value": "Chinese",
					"description": "CHINESE special features"
				},
				{
					"name": "Japanese",
					"value": "Japanese",
					"description": "JAPANESE special features"
				},
				{
					"name": "Indian",
					"value": "Indian",
					"description": "INDIAN special features"
				},
				{
					"name": "Admin",
					"value": "Admin",
					"description": "Administrative, system management."
				},
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...personalDescription,
		...socialDescription,
		...chineseDescription,
		...japaneseDescription,
		...indianDescription,
		...adminDescription,
		...generalDescription
		],
	};
}
