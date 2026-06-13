import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class NamsorApi implements ICredentialType {
        name = 'N8nDevNamsorApi';

        displayName = 'Namsor API';

        icon: Icon = { light: 'file:../nodes/Namsor/namsor.png', dark: 'file:../nodes/Namsor/namsor.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://v2.namsor.com/NamSorAPIv2',
                        required: true,
                        placeholder: 'https://v2.namsor.com/NamSorAPIv2',
                        description: 'The base URL of your Namsor API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-KEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
