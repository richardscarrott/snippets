import { filesSelector } from './sources';

const state = {
  entities: {
    sources: {
      '0b45edc0-5053-11e8-8463-1398ef7a3c84': {
        name: 'test',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '0b45edc0-5053-11e8-8463-1398ef7a3c84',
        content: [
          {
            id: 'e61c62fec6799c2f05d24804c4dcd50e9dd1bc61',
            schema: 'dirs'
          },
          {
            id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
            schema: 'files'
          },
          {
            id: '54f5294c25e16769f370d4fabf589fd0a59d286e',
            schema: 'files'
          },
          {
            id: 'a006d5821cc5365774514d65793696ff7f1997f8',
            schema: 'dirs'
          },
          {
            id: 'ce312c8a5f3e4ac7faee9c75f8846a45f7cd9c7d',
            schema: 'files'
          },
          {
            id: 'c9dfcbcc69e5384ba05dad46acbfba35865e453c',
            schema: 'files'
          },
          {
            id: '83863bd2f718f25e2c158318bf585f072c744162',
            schema: 'dirs'
          },
          {
            id: '3cf3d2d0c7407330bc894fb1dc645a3e44c7b0aa',
            schema: 'dirs'
          },
          {
            id: 'add03be3983eba9555d96ac5adb2ccefb491dd03',
            schema: 'files'
          },
          {
            id: 'f420a2ae6faf8ebec21fa121f1e049ff33931b48',
            schema: 'files'
          }
        ],
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525517841667
        }
      },
      '1afbb010-5053-11e8-8463-1398ef7a3c84': {
        name: 'test (file)',
        url:
          'https://github.com/richardscarrott/test-snippets/blob/master/demo/empty.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '1afbb010-5053-11e8-8463-1398ef7a3c84',
        content: [
          {
            id: '8b137891791fe96927ad78e64b0aad7bded08bdc',
            schema: 'files'
          }
        ],
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525517863451
        }
      },
      '9857ae20-5057-11e8-b9a6-739adda71566': {
        name: 'Trainline Web',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets/account',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '9857ae20-5057-11e8-b9a6-739adda71566',
        content: [
          {
            id: 'f98defcea2295ef63021c74e066d1e8cdcfa1807',
            schema: 'files'
          }
        ]
      },
      '9e9853c0-5057-11e8-b9a6-739adda71566': {
        name: 'Trainline Web (file)',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets/account/register-autofill.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '9e9853c0-5057-11e8-b9a6-739adda71566',
        content: [
          {
            id: 'f98defcea2295ef63021c74e066d1e8cdcfa1807',
            schema: 'files'
          }
        ]
      },
      'c5967970-5057-11e8-b9a6-739adda71566': {
        name: 'Trainline Web',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'c5967970-5057-11e8-b9a6-739adda71566',
        content: [
          {
            id: 'e61c62fec6799c2f05d24804c4dcd50e9dd1bc61',
            schema: 'dirs'
          },
          {
            id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
            schema: 'files'
          },
          {
            id: '54f5294c25e16769f370d4fabf589fd0a59d286e',
            schema: 'files'
          },
          {
            id: 'a006d5821cc5365774514d65793696ff7f1997f8',
            schema: 'dirs'
          },
          {
            id: 'ce312c8a5f3e4ac7faee9c75f8846a45f7cd9c7d',
            schema: 'files'
          },
          {
            id: 'c9dfcbcc69e5384ba05dad46acbfba35865e453c',
            schema: 'files'
          },
          {
            id: '83863bd2f718f25e2c158318bf585f072c744162',
            schema: 'dirs'
          },
          {
            id: '3cf3d2d0c7407330bc894fb1dc645a3e44c7b0aa',
            schema: 'dirs'
          },
          {
            id: 'add03be3983eba9555d96ac5adb2ccefb491dd03',
            schema: 'files'
          },
          {
            id: 'f420a2ae6faf8ebec21fa121f1e049ff33931b48',
            schema: 'files'
          }
        ],
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525519876549
        }
      },
      'd94f2660-5057-11e8-b9a6-739adda71566': {
        name: 'Trainline Web (file)',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets/account/register-autofill.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'd94f2660-5057-11e8-b9a6-739adda71566',
        content: [
          {
            id: 'f98defcea2295ef63021c74e066d1e8cdcfa1807',
            schema: 'files'
          }
        ],
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525519910340
        }
      },
      '1114f390-5058-11e8-b9a6-739adda71566': {
        name: 'bahmutov/code-snippets/css-layout',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/css-layout.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '1114f390-5058-11e8-b9a6-739adda71566',
        content: [
          {
            id: '16994d42797d8187cfd95155cde3ee87f6ca1266',
            schema: 'files'
          }
        ]
      },
      '7d0f29d0-5058-11e8-b9a6-739adda71566': {
        name: 'bahmutov/code-snippets/first-paint-remote.js',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '7d0f29d0-5058-11e8-b9a6-739adda71566',
        content: [
          {
            id: '01ec30fd30589cd3f80f8e2f77c4f8fd1c590f7b',
            schema: 'files'
          }
        ],
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525520395566
        }
      },
      '6d3d73b0-505b-11e8-ac98-7745f6353963': {
        name: 'bahmutov/code-snippets/first-paint-remote.js 2',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '6d3d73b0-505b-11e8-ac98-7745f6353963',
        content: [
          {
            id: '7b8e4ed0-505b-11e8-b126-99f9ad4fe745',
            schema: 'files'
          }
        ]
      },
      'd47789d0-505b-11e8-ac98-7745f6353963': {
        name: 'bahmutov/code-snippets/first-paint-remote.js 2',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'd47789d0-505b-11e8-ac98-7745f6353963',
        content: [
          {
            id: 'e0c6a180-505b-11e8-b126-99f9ad4fe745',
            schema: 'files'
          }
        ]
      },
      '5bf77f00-505c-11e8-ac98-7745f6353963': {
        name:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '5bf77f00-505c-11e8-ac98-7745f6353963',
        content: [
          {
            id: '627d43f0-505c-11e8-b126-99f9ad4fe745',
            schema: 'files'
          }
        ]
      },
      '606fa430-505d-11e8-814c-e97f2e1d6b4b': {
        name:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js 2',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '606fa430-505d-11e8-814c-e97f2e1d6b4b',
        content: [
          {
            id: '672811e0-505d-11e8-b0ff-417beb47e78d',
            schema: 'files'
          }
        ]
      },
      '703a4e10-505d-11e8-814c-e97f2e1d6b4b': {
        name: 'bahmutov/code-snippets/first-paint-remote.js 2',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '703a4e10-505d-11e8-814c-e97f2e1d6b4b',
        content: [
          {
            id: '91d86a20-505d-11e8-b0ff-417beb47e78d',
            schema: 'files'
          }
        ]
      },
      'a40fce40-505d-11e8-8ecf-9d99d3539c4f': {
        name: 'bahmutov/code-snippets/first-paint-remote.js 3',
        url:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'a40fce40-505d-11e8-8ecf-9d99d3539c4f',
        content: [
          {
            id: 'b0958650-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      'df222e60-505d-11e8-8ecf-9d99d3539c4f': {
        name: 'richardscarrott/test-snippets',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'df222e60-505d-11e8-8ecf-9d99d3539c4f',
        content: [
          {
            id: 'e7c973c0-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          },
          {
            id: 'e7e00900-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e7e6bfc0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e7e58740-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          },
          {
            id: 'e7e86d70-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e7ebc8d0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e7eb0580-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          },
          {
            id: 'e7f4f090-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          },
          {
            id: 'e7fcdfd0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e7fd06e0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      '84715d50-505e-11e8-8ecf-9d99d3539c4f': {
        name: 'Demo (two empty files, same sha)',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/demo',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: '84715d50-505e-11e8-8ecf-9d99d3539c4f',
        content: [
          {
            id: '94689570-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: '94825f00-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: '94921670-505e-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          },
          {
            id: '94965c30-505e-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          }
        ]
      },
      'f98aef20-505e-11e8-879b-5570db5b57ed': {
        name: 'Demo 2',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/demo',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'f98aef20-505e-11e8-879b-5570db5b57ed',
        content: [
          {
            id: '8b137891791fe96927ad78e64b0aad7bded08bdc',
            schema: 'files'
          },
          {
            id: 'b341e88729a6e9d60bfc15de13bd9135a49e9cc2',
            schema: 'files'
          },
          {
            id: '00304a00-505f-11e8-ac6a-2bd60a302a50',
            schema: 'dirs'
          },
          {
            id: '0031d0a0-505f-11e8-ac6a-2bd60a302a50',
            schema: 'dirs'
          }
        ]
      }
    },
    dirs: {
      e61c62fec6799c2f05d24804c4dcd50e9dd1bc61: {
        id: 'e61c62fec6799c2f05d24804c4dcd50e9dd1bc61',
        name: 'account',
        content: [
          {
            id: 'f98defcea2295ef63021c74e066d1e8cdcfa1807',
            schema: 'files'
          }
        ]
      },
      a006d5821cc5365774514d65793696ff7f1997f8: {
        id: 'a006d5821cc5365774514d65793696ff7f1997f8',
        name: 'foo',
        content: [
          {
            id: '6d6eef192340736025df68eb567190e55c6e6346',
            schema: 'files'
          }
        ]
      },
      f84f9ca96e95da02ac646ce76ff4042cc92fa7b2: {
        id: 'f84f9ca96e95da02ac646ce76ff4042cc92fa7b2',
        name: 'very-very-nested',
        content: [
          {
            id: 'a04e8abe76cfbab670ccb87865b9167fb32404f0',
            schema: 'files'
          },
          {
            id: '0b7ad562417999d379e869f73eff7385963ca478',
            schema: 'files'
          }
        ]
      },
      fa21ff077e2e9894b112c969abae31e43a77d97c: {
        id: 'fa21ff077e2e9894b112c969abae31e43a77d97c',
        name: 'very-nested',
        content: [
          {
            id: 'f84f9ca96e95da02ac646ce76ff4042cc92fa7b2',
            schema: 'dirs'
          }
        ]
      },
      '83863bd2f718f25e2c158318bf585f072c744162': {
        id: '83863bd2f718f25e2c158318bf585f072c744162',
        name: 'nested',
        content: [
          {
            id: 'fa21ff077e2e9894b112c969abae31e43a77d97c',
            schema: 'dirs'
          }
        ]
      },
      '3cf3d2d0c7407330bc894fb1dc645a3e44c7b0aa': {
        id: '3cf3d2d0c7407330bc894fb1dc645a3e44c7b0aa',
        name: 'nojs',
        content: [
          {
            id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
            schema: 'files'
          },
          {
            id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
            schema: 'files'
          }
        ]
      },
      '153d59d0-5053-11e8-8dd2-edb298693c77': {
        id: '153d59d0-5053-11e8-8dd2-edb298693c77',
        name: 'test',
        content: [
          {
            id: 'e61c62fec6799c2f05d24804c4dcd50e9dd1bc61',
            schema: 'dirs'
          },
          {
            id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
            schema: 'files'
          },
          {
            id: '54f5294c25e16769f370d4fabf589fd0a59d286e',
            schema: 'files'
          },
          {
            id: 'a006d5821cc5365774514d65793696ff7f1997f8',
            schema: 'dirs'
          },
          {
            id: 'ce312c8a5f3e4ac7faee9c75f8846a45f7cd9c7d',
            schema: 'files'
          },
          {
            id: 'c9dfcbcc69e5384ba05dad46acbfba35865e453c',
            schema: 'files'
          },
          {
            id: '83863bd2f718f25e2c158318bf585f072c744162',
            schema: 'dirs'
          },
          {
            id: '3cf3d2d0c7407330bc894fb1dc645a3e44c7b0aa',
            schema: 'dirs'
          },
          {
            id: 'add03be3983eba9555d96ac5adb2ccefb491dd03',
            schema: 'files'
          },
          {
            id: 'f420a2ae6faf8ebec21fa121f1e049ff33931b48',
            schema: 'files'
          }
        ]
      },
      'e7c973c0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7c973c0-505d-11e8-93ef-03dd69bebf80',
        name: 'account',
        content: [
          {
            id: 'e7ff02b0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      'e7e58740-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7e58740-505d-11e8-93ef-03dd69bebf80',
        name: 'foo',
        content: [
          {
            id: 'e800fe80-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      'e8191a60-505d-11e8-93ef-03dd69bebf80': {
        id: 'e8191a60-505d-11e8-93ef-03dd69bebf80',
        name: 'very-very-nested',
        content: [
          {
            id: 'e82ffdc0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e82eec50-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      'e7ff29c0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7ff29c0-505d-11e8-93ef-03dd69bebf80',
        name: 'very-nested',
        content: [
          {
            id: 'e8191a60-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          }
        ]
      },
      'e7eb0580-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7eb0580-505d-11e8-93ef-03dd69bebf80',
        name: 'nested',
        content: [
          {
            id: 'e7ff29c0-505d-11e8-93ef-03dd69bebf80',
            schema: 'dirs'
          }
        ]
      },
      'e7f4f090-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7f4f090-505d-11e8-93ef-03dd69bebf80',
        name: 'nojs',
        content: [
          {
            id: 'e80a7460-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: 'e80ff2a0-505d-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      '94921670-505e-11e8-93ef-03dd69bebf80': {
        id: '94921670-505e-11e8-93ef-03dd69bebf80',
        name: 'payment-cards',
        content: [
          {
            id: '94af1450-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: '94af1451-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      '94965c30-505e-11e8-93ef-03dd69bebf80': {
        id: '94965c30-505e-11e8-93ef-03dd69bebf80',
        name: 'utils',
        content: [
          {
            id: '94ae9f20-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          },
          {
            id: '94ae5100-505e-11e8-93ef-03dd69bebf80',
            schema: 'files'
          }
        ]
      },
      '00304a00-505f-11e8-ac6a-2bd60a302a50': {
        id: '00304a00-505f-11e8-ac6a-2bd60a302a50',
        name: 'payment-cards',
        content: [
          {
            id: '8b137891791fe96927ad78e64b0aad7bded08bdc',
            schema: 'files'
          },
          {
            id: 'fbb8e6c0454bdb9353e07e1e6b59e9dc7d6dd6e3',
            schema: 'files'
          }
        ]
      },
      '0031d0a0-505f-11e8-ac6a-2bd60a302a50': {
        id: '0031d0a0-505f-11e8-ac6a-2bd60a302a50',
        name: 'utils',
        content: [
          {
            id: '8898fa990b5c1ecfb9fa3caed946365c8d3f41d0',
            schema: 'files'
          },
          {
            id: '8b137891791fe96927ad78e64b0aad7bded08bdc',
            schema: 'files'
          }
        ]
      }
    },
    files: {
      f98defcea2295ef63021c74e066d1e8cdcfa1807: {
        id: 'f98defcea2295ef63021c74e066d1e8cdcfa1807',
        name: 'register-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
      },
      e69de29bb2d1d6434b8b29ae775ad8c2e48c5391: {
        id: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
        name: 'some-markdown.md',
        content: ''
      },
      '54f5294c25e16769f370d4fabf589fd0a59d286e': {
        id: '54f5294c25e16769f370d4fabf589fd0a59d286e',
        name: 'checkout-autofill.ts',
        content:
          'Y29uc29sZS5sb2coJ1J1bm5pbmcgY2hlY2tvdXQgYXV0b2ZpbGwnKTsKCmNv\nbnN0IHRoaXNTaG91bGROb3RCZUxlYWtlZFRvVGhlR2xvYmFsID0gdHJ1ZTsK\n'
      },
      '6d6eef192340736025df68eb567190e55c6e6346': {
        id: '6d6eef192340736025df68eb567190e55c6e6346',
        name: 'bar.js',
        content: 'YWxlcnQoJ1J1bm5pbmcgYmFyJyk7Cg==\n'
      },
      ce312c8a5f3e4ac7faee9c75f8846a45f7cd9c7d: {
        id: 'ce312c8a5f3e4ac7faee9c75f8846a45f7cd9c7d',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgcXVlcnknKTsK\n'
      },
      c9dfcbcc69e5384ba05dad46acbfba35865e453c: {
        id: 'c9dfcbcc69e5384ba05dad46acbfba35865e453c',
        name: 'log-store.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgc3RvcmUnKTsK\n'
      },
      a04e8abe76cfbab670ccb87865b9167fb32404f0: {
        id: 'a04e8abe76cfbab670ccb87865b9167fb32404f0',
        name: 'nested.js',
        content: 'Ly8gbmVzdGVkLmpzCmNvbnNvbGUubG9nKCduZXN0ZWQuanMnKTsK\n'
      },
      '0b7ad562417999d379e869f73eff7385963ca478': {
        id: '0b7ad562417999d379e869f73eff7385963ca478',
        name: 'nested.md',
        content: 'IyBOZXN0ZWQgbWFya2Rvd24K\n'
      },
      add03be3983eba9555d96ac5adb2ccefb491dd03: {
        id: 'add03be3983eba9555d96ac5adb2ccefb491dd03',
        name: 'search-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgc2VhcmNoIGF1dG9maWxsJyk7Cg==\n'
      },
      f420a2ae6faf8ebec21fa121f1e049ff33931b48: {
        id: 'f420a2ae6faf8ebec21fa121f1e049ff33931b48',
        name: 'source-autofill.js',
        content:
          'dmFyIHNldElucHV0ID0gKGlucHV0LCB2YWx1ZSkgPT4gewogICAgdmFyIG5h\ndGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlE\nZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwg\nInZhbHVlIikuc2V0OwpuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5w\ndXQsIHZhbHVlKTsKdmFyIGV2MiA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1\nYmJsZXM6IHRydWV9KTsKaW5wdXQuZGlzcGF0Y2hFdmVudChldjIpOwp9OwoK\nc2V0SW5wdXQoJCgnW25hbWU9Im5hbWUiXScpLCAnVHJhaW5saW5lIFdlYicp\nCnNldElucHV0KCQoJ1tuYW1lPSJhcGkiXScpLCAnaHR0cHM6Ly9hcGkuZ2l0\naHViLmNvbScpCnNldElucHV0KCQoJ1tuYW1lPSJhY2Nlc3NUb2tlbiJdJyks\nICcxMGIxYjRmMDdmNjAyZjljNjE3YzlhNGFkMjQ1ZjQ1NjA1YzAyODIwJykK\nLy9zZXRJbnB1dCgkKCdbbmFtZT0iYWNjZXNzVG9rZW4iXScpLCAnMTBiMWI0\nZjA3ZjYwMmY5YzYxN2M5YTRhZDI0NWY0NTYwNWMwMjgyMEJVRycpCnNldElu\ncHV0KCQoJ1tuYW1lPSJvd25lciJdJyksICdyaWNoYXJkc2NhcnJvdHQnKQpz\nZXRJbnB1dCgkKCdbbmFtZT0icmVwbyJdJyksICd0ZXN0LXNuaXBwZXRzJykK\nc2V0SW5wdXQoJCgnW25hbWU9InBhdGgiXScpLCAnc25pcHBldHMnKQo=\n'
      },
      '8b137891791fe96927ad78e64b0aad7bded08bdc': {
        id: '8b137891791fe96927ad78e64b0aad7bded08bdc',
        name: 'log.js',
        content: 'Cg==\n'
      },
      '16994d42797d8187cfd95155cde3ee87f6ca1266': {
        id: '16994d42797d8187cfd95155cde3ee87f6ca1266',
        name: 'css-layout.js',
        content:
          'Ly8gdGlueSBDU1MgbGF5b3V0ICJkZWJ1Z2dlciIKLy8gZnJvbSBodHRwczov\nL2dpc3QuZ2l0aHViLmNvbS9hZGR5b3NtYW5pL2ZkMzk5OWVhN2ZjZTI0Mjc1\nNmIxCi8vIHB1dHMgcmFuZG9tIGNvbG9yIGJvcmRlciBhcm91bmQgZWFjaCBl\nbGVtZW50Ci8qIGdsb2JhbCAkJCAqLwovKiBqc2hpbnQgLVcwMTYgKi8KW10u\nZm9yRWFjaC5jYWxsKCQkKCcqJyksCiAgZnVuY3Rpb24gKGEpIHsKICAgIGEu\nc3R5bGUub3V0bGluZSA9ICcxcHggc29saWQgIycgKyAofn4oTWF0aC5yYW5k\nb20oKSAqICgxIDw8IDI0KSkpLnRvU3RyaW5nKDE2KTsKICB9KTsK\n'
      },
      '01ec30fd30589cd3f80f8e2f77c4f8fd1c590f7b': {
        id: '01ec30fd30589cd3f80f8e2f77c4f8fd1c590f7b',
        name: 'first-paint-remote.js',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      '7b8e4ed0-505b-11e8-b126-99f9ad4fe745': {
        id: '7b8e4ed0-505b-11e8-b126-99f9ad4fe745',
        name: 'bahmutov/code-snippets/first-paint-remote.js 2',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      'e0c6a180-505b-11e8-b126-99f9ad4fe745': {
        id: 'e0c6a180-505b-11e8-b126-99f9ad4fe745',
        name: 'bahmutov/code-snippets/first-paint-remote.js 2',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      '627d43f0-505c-11e8-b126-99f9ad4fe745': {
        id: '627d43f0-505c-11e8-b126-99f9ad4fe745',
        name:
          'https://github.com/bahmutov/code-snippets/blob/master/first-paint-remote.js',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      '672811e0-505d-11e8-b0ff-417beb47e78d': {
        id: '672811e0-505d-11e8-b0ff-417beb47e78d',
        name: 'first-paint-remote.js',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      '91d86a20-505d-11e8-b0ff-417beb47e78d': {
        id: '91d86a20-505d-11e8-b0ff-417beb47e78d',
        name: 'first-paint-remote.js',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      'b0958650-505d-11e8-93ef-03dd69bebf80': {
        id: 'b0958650-505d-11e8-93ef-03dd69bebf80',
        name: 'first-paint-remote.js',
        content:
          'KGZ1bmN0aW9uIGZpcnN0UGFpbnRSZW1vdGUoKSB7CiAgLy8gZm9ybSByYXdH\naXQgcHJveHkgdXJsCiAgdmFyIGdoVXJsID0gJ2JhaG11dG92L2NvZGUtc25p\ncHBldHMvbWFzdGVyL2ZpcnN0LXBhaW50LmpzJzsKICB2YXIgcmF3VXJsID0g\nJ2h0dHBzOi8vcmF3Z2l0LmNvbS8nICsgZ2hVcmw7CiAgLy8gZG93bmxvYWQg\nYW5kIHJ1biB0aGUgc2NyaXB0CiAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRF\nbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdOwogIHZhciBzY3JpcHQgPSBk\nb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICBzY3JpcHQudHlw\nZSA9ICd0ZXh0L2phdmFzY3JpcHQnOwogIHNjcmlwdC5zcmMgPSByYXdVcmw7\nCiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOwp9KCkpOwo=\n'
      },
      'e7ff02b0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7ff02b0-505d-11e8-93ef-03dd69bebf80',
        name: 'register-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
      },
      'e7e00900-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7e00900-505d-11e8-93ef-03dd69bebf80',
        name: 'barrel-roll.png',
        content: ''
      },
      'e7e6bfc0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7e6bfc0-505d-11e8-93ef-03dd69bebf80',
        name: 'checkout-autofill.ts',
        content:
          'Y29uc29sZS5sb2coJ1J1bm5pbmcgY2hlY2tvdXQgYXV0b2ZpbGwnKTsKCmNv\nbnN0IHRoaXNTaG91bGROb3RCZUxlYWtlZFRvVGhlR2xvYmFsID0gdHJ1ZTsK\n'
      },
      'e800fe80-505d-11e8-93ef-03dd69bebf80': {
        id: 'e800fe80-505d-11e8-93ef-03dd69bebf80',
        name: 'bar.js',
        content: 'YWxlcnQoJ1J1bm5pbmcgYmFyJyk7Cg==\n'
      },
      'e7e86d70-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7e86d70-505d-11e8-93ef-03dd69bebf80',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgcXVlcnknKTsK\n'
      },
      'e7ebc8d0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7ebc8d0-505d-11e8-93ef-03dd69bebf80',
        name: 'log-store.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgc3RvcmUnKTsK\n'
      },
      'e82ffdc0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e82ffdc0-505d-11e8-93ef-03dd69bebf80',
        name: 'nested.js',
        content: 'Ly8gbmVzdGVkLmpzCmNvbnNvbGUubG9nKCduZXN0ZWQuanMnKTsK\n'
      },
      'e82eec50-505d-11e8-93ef-03dd69bebf80': {
        id: 'e82eec50-505d-11e8-93ef-03dd69bebf80',
        name: 'nested.md',
        content: 'IyBOZXN0ZWQgbWFya2Rvd24K\n'
      },
      'e80a7460-505d-11e8-93ef-03dd69bebf80': {
        id: 'e80a7460-505d-11e8-93ef-03dd69bebf80',
        name: 'an-image.png',
        content: ''
      },
      'e80ff2a0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e80ff2a0-505d-11e8-93ef-03dd69bebf80',
        name: 'some-markdown.md',
        content: ''
      },
      'e7fcdfd0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7fcdfd0-505d-11e8-93ef-03dd69bebf80',
        name: 'search-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgc2VhcmNoIGF1dG9maWxsJyk7Cg==\n'
      },
      'e7fd06e0-505d-11e8-93ef-03dd69bebf80': {
        id: 'e7fd06e0-505d-11e8-93ef-03dd69bebf80',
        name: 'source-autofill.js',
        content:
          'dmFyIHNldElucHV0ID0gKGlucHV0LCB2YWx1ZSkgPT4gewogICAgdmFyIG5h\ndGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlE\nZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwg\nInZhbHVlIikuc2V0OwpuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5w\ndXQsIHZhbHVlKTsKdmFyIGV2MiA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1\nYmJsZXM6IHRydWV9KTsKaW5wdXQuZGlzcGF0Y2hFdmVudChldjIpOwp9OwoK\nc2V0SW5wdXQoJCgnW25hbWU9Im5hbWUiXScpLCAnVHJhaW5saW5lIFdlYicp\nCnNldElucHV0KCQoJ1tuYW1lPSJhcGkiXScpLCAnaHR0cHM6Ly9hcGkuZ2l0\naHViLmNvbScpCnNldElucHV0KCQoJ1tuYW1lPSJhY2Nlc3NUb2tlbiJdJyks\nICcxMGIxYjRmMDdmNjAyZjljNjE3YzlhNGFkMjQ1ZjQ1NjA1YzAyODIwJykK\nLy9zZXRJbnB1dCgkKCdbbmFtZT0iYWNjZXNzVG9rZW4iXScpLCAnMTBiMWI0\nZjA3ZjYwMmY5YzYxN2M5YTRhZDI0NWY0NTYwNWMwMjgyMEJVRycpCnNldElu\ncHV0KCQoJ1tuYW1lPSJvd25lciJdJyksICdyaWNoYXJkc2NhcnJvdHQnKQpz\nZXRJbnB1dCgkKCdbbmFtZT0icmVwbyJdJyksICd0ZXN0LXNuaXBwZXRzJykK\nc2V0SW5wdXQoJCgnW25hbWU9InBhdGgiXScpLCAnc25pcHBldHMnKQo=\n'
      },
      '94689570-505e-11e8-93ef-03dd69bebf80': {
        id: '94689570-505e-11e8-93ef-03dd69bebf80',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      '94825f00-505e-11e8-93ef-03dd69bebf80': {
        id: '94825f00-505e-11e8-93ef-03dd69bebf80',
        name: 'passenger-details-autofill.js',
        content:
          'Y29uc29sZS5sb2coJ2F1dG9maWxsIHBhc3NlbmdlciBkZXRhaWxzIDEyMycp\nOwo=\n'
      },
      '94af1450-505e-11e8-93ef-03dd69bebf80': {
        id: '94af1450-505e-11e8-93ef-03dd69bebf80',
        name: 'log.js',
        content: 'Cg==\n'
      },
      '94af1451-505e-11e8-93ef-03dd69bebf80': {
        id: '94af1451-505e-11e8-93ef-03dd69bebf80',
        name: 'visa-autofill.js',
        content: 'Y29uc29sZS5sb2coJ3Zpc2EgYXV0b2ZpbGwgMTIzJyk7Cg==\n'
      },
      '94ae9f20-505e-11e8-93ef-03dd69bebf80': {
        id: '94ae9f20-505e-11e8-93ef-03dd69bebf80',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ2xvZyBxdWVyeSAxMjMnKTsK\n'
      },
      '94ae5100-505e-11e8-93ef-03dd69bebf80': {
        id: '94ae5100-505e-11e8-93ef-03dd69bebf80',
        name: 'log.js',
        content: 'Cg==\n'
      },
      b341e88729a6e9d60bfc15de13bd9135a49e9cc2: {
        id: 'b341e88729a6e9d60bfc15de13bd9135a49e9cc2',
        name: 'passenger-details-autofill.js',
        content:
          'Y29uc29sZS5sb2coJ2F1dG9maWxsIHBhc3NlbmdlciBkZXRhaWxzIDEyMycp\nOwo=\n'
      },
      fbb8e6c0454bdb9353e07e1e6b59e9dc7d6dd6e3: {
        id: 'fbb8e6c0454bdb9353e07e1e6b59e9dc7d6dd6e3',
        name: 'visa-autofill.js',
        content: 'Y29uc29sZS5sb2coJ3Zpc2EgYXV0b2ZpbGwgMTIzJyk7Cg==\n'
      },
      '8898fa990b5c1ecfb9fa3caed946365c8d3f41d0': {
        id: '8898fa990b5c1ecfb9fa3caed946365c8d3f41d0',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ2xvZyBxdWVyeSAxMjMnKTsK\n'
      }
    }
  },
  sources: {
    meta: {
      '0b45edc0-5053-11e8-8463-1398ef7a3c84': {
        status: 'SUCCESS',
        receivedAt: 1525520400648
      },
      '1afbb010-5053-11e8-8463-1398ef7a3c84': {
        status: 'SUCCESS',
        receivedAt: 1525520402971
      },
      'fa77fd50-5055-11e8-bea4-0197c11e9b6d': {
        status: 'CREATING'
      },
      '16fe1540-5056-11e8-afef-b1ee829b3cd8': {
        status: 'CREATING'
      },
      '9857ae20-5057-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525519785772,
        deleted: true
      },
      '9e9853c0-5057-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525519828479,
        deleted: true
      },
      'c5967970-5057-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525520405554
      },
      'd94f2660-5057-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525520407594
      },
      '1114f390-5058-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525520016458,
        deleted: true
      },
      '7d0f29d0-5058-11e8-b9a6-739adda71566': {
        status: 'SUCCESS',
        receivedAt: 1525520409432,
        deleted: false
      },
      '6d3d73b0-505b-11e8-ac98-7745f6353963': {
        status: 'SUCCESS',
        receivedAt: 1525521448339,
        deleted: true
      },
      'd47789d0-505b-11e8-ac98-7745f6353963': {
        status: 'SUCCESS',
        receivedAt: 1525521618232,
        deleted: true
      },
      '5bf77f00-505c-11e8-ac98-7745f6353963': {
        status: 'SUCCESS',
        receivedAt: 1525521836106,
        deleted: true
      },
      '606fa430-505d-11e8-814c-e97f2e1d6b4b': {
        status: 'SUCCESS',
        receivedAt: 1525522272767,
        deleted: true
      },
      '703a4e10-505d-11e8-814c-e97f2e1d6b4b': {
        status: 'SUCCESS',
        receivedAt: 1525522344386
      },
      'a40fce40-505d-11e8-8ecf-9d99d3539c4f': {
        status: 'SUCCESS',
        receivedAt: 1525522395966
      },
      'df222e60-505d-11e8-8ecf-9d99d3539c4f': {
        status: 'SUCCESS',
        receivedAt: 1525522489247
      },
      '84715d50-505e-11e8-8ecf-9d99d3539c4f': {
        status: 'SUCCESS',
        receivedAt: 1525522778647
      },
      'f98aef20-505e-11e8-879b-5570db5b57ed': {
        status: 'SUCCESS',
        receivedAt: 1525522959172
      }
    },
    data: [
      '0b45edc0-5053-11e8-8463-1398ef7a3c84',
      '1afbb010-5053-11e8-8463-1398ef7a3c84',
      '9857ae20-5057-11e8-b9a6-739adda71566',
      '9e9853c0-5057-11e8-b9a6-739adda71566',
      'c5967970-5057-11e8-b9a6-739adda71566',
      'd94f2660-5057-11e8-b9a6-739adda71566',
      '1114f390-5058-11e8-b9a6-739adda71566',
      '7d0f29d0-5058-11e8-b9a6-739adda71566',
      '6d3d73b0-505b-11e8-ac98-7745f6353963',
      'd47789d0-505b-11e8-ac98-7745f6353963',
      '5bf77f00-505c-11e8-ac98-7745f6353963',
      '606fa430-505d-11e8-814c-e97f2e1d6b4b',
      '703a4e10-505d-11e8-814c-e97f2e1d6b4b',
      'a40fce40-505d-11e8-8ecf-9d99d3539c4f',
      'df222e60-505d-11e8-8ecf-9d99d3539c4f',
      '84715d50-505e-11e8-8ecf-9d99d3539c4f',
      'f98aef20-505e-11e8-879b-5570db5b57ed'
    ]
  },
  form: {},
  ui: {
    snackbar: {
      type: '',
      payload: {
        name: 'Demo 2',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/demo',
        accessToken: '2bdbd8d2c6ac9198936cdfd01899848f8d61a7a1',
        id: 'f98aef20-505e-11e8-879b-5570db5b57ed'
      }
    }
  },
  _persist: {
    version: 2,
    rehydrated: true
  }
};

describe('filesSelector', () => {
  it('works', () => {
    expect(filesSelector(state)).toEqual([
      {
        id: 'e10d5e20-4e50-11e8-915d-83e9ca8f32cf',
        name: 'register-autofill.js',
        path: 'Test Snippets/snippets/account/register-autofill.js'
      },
      {
        id: 'e0f8c4b0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'barrel-roll.png',
        path: 'Test Snippets/snippets/barrel-roll.png'
      },
      {
        id: 'e0f960f0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'checkout-autofill.ts',
        path: 'Test Snippets/snippets/checkout-autofill.ts'
      },
      {
        id: 'e12e53a0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'bar.js',
        path: 'Test Snippets/snippets/foo/bar.js'
      },
      {
        id: 'e0fa2440-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log-query.js',
        path: 'Test Snippets/snippets/log-query.js'
      },
      {
        id: 'e0fa9970-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log-store.js',
        path: 'Test Snippets/snippets/log-store.js'
      },
      {
        id: 'e162aa10-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nested.js',
        path:
          'Test Snippets/snippets/nested/very-nested/very-very-nested/nested.js'
      },
      {
        id: 'e1634650-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nested.md',
        path:
          'Test Snippets/snippets/nested/very-nested/very-very-nested/nested.md'
      },
      {
        id: 'e141b490-4e50-11e8-915d-83e9ca8f32cf',
        name: 'an-image.png',
        path: 'Test Snippets/snippets/nojs/an-image.png'
      },
      {
        id: 'e14229c0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'some-markdown.md',
        path: 'Test Snippets/snippets/nojs/some-markdown.md'
      },
      {
        id: 'e0fbd1f0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'search-autofill.js',
        path: 'Test Snippets/snippets/search-autofill.js'
      },
      {
        id: 'e0fc4720-4e50-11e8-915d-83e9ca8f32cf',
        name: 'source-autofill.js',
        path: 'Test Snippets/snippets/source-autofill.js'
      }
    ]);
  });
});
