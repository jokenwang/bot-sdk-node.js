/**
 * @file 查询个税
 * @author yelvye@baidu.com
 */

let data = {
    version: 'v2.0',
    session: {
        new: false,
        sessionId: '2ba77976-2206-47de-9c87-9842f6fc35ec',
        attributes: []
    },
    context: {
        System: {
            user: {
                userId: '145771863',
                userInfo: {
                    account: []
                }
            },
            application: {
                applicationId: 'faaded36-7884-5186-76f0-3129bf82ac0b'
            },
            device: {
                deviceId: '49d0ab4d1f13b4530fae3a7f02107cd5',
                supportedInterfaces: {
                    VoiceInput: [],
                    VoiceOutput: [],
                    AudioPlayer: []
                }
            },
            apiAccessToken: '',
            apiEndPoint: 'https://xiaodu.baidu.com'
        }
    },
    request: {
        query: {
            type: 'TEXT',
            original: 'yes'
        },
        dialogState: 'COMPLETED',
        intents: [
            {
                name: 'inquiry_tax',
                confirmationStatus: 'CONFIRMED',
                slots: {
                    salary: {
                        name: 'salary',
                        value: '1234',
                        values: [
                            '1234'
                        ],
                        confirmationStatus: 'CONFIRMED'
                    },
                    city: {
                        name: 'city',
                        value: '北京',
                        values: [
                            '北京'
                        ],
                        confirmationStatus: 'CONFIRMED'
                    },
                    computeType: {
                        name: 'computeType',
                        value: '全部',
                        values: [
                            '全部'
                        ],
                        confirmationStatus: 'NONE'
                    }
                }
            }
        ],
        type: 'IntentRequest',
        requestId: '7247dabcc4c842528af7ebcb050fe1e2_0',
        timestamp: '1528969982',
        dialogRequestId: 'ca4ee7eb-f635-4392-95b2-3b74e8ccf809'
    }
};

console.log(JSON.stringify(data));
