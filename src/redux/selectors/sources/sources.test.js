import { filesSelector } from './sources';

const state = {
  entities: {
    sources: {
      'fcbe26c0-4d76-11e8-b555-8b61f2cc806d': {
        name: '    fasd   sfad',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: 'fcbe26c0-4d76-11e8-b555-8b61f2cc806d',
        content: {
          id: '04f54530-4d77-11e8-a87e-936d935c183f',
          schema: 'dirs'
        }
      },
      '8d06b2b0-4d7c-11e8-874b-9dd2db0d9840': {
        name:
          '                                        a d dfefefefefe f ef . fe fe . e f .            ',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: '8d06b2b0-4d7c-11e8-874b-9dd2db0d9840',
        content: {
          id: '97c95e00-4d7c-11e8-83fd-0180254d46e4',
          schema: 'dirs'
        }
      },
      'a1b16b50-4d7d-11e8-a155-1772a868f659': {
        name: 'dfs sf s',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: 'a1b16b50-4d7d-11e8-a155-1772a868f659',
        content: {
          id: 'a6912160-4d7d-11e8-83fd-0180254d46e4',
          schema: 'dirs'
        }
      },
      'e84ef6e0-4d7d-11e8-aed5-e572e0a14711': {
        name: 'fsda j j dfsj fds ijofweijo ijo w ioj .',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: 'e84ef6e0-4d7d-11e8-aed5-e572e0a14711',
        content: {
          id: 'f8030b80-4d7d-11e8-83fd-0180254d46e4',
          schema: 'dirs'
        }
      },
      '268f3e60-4d7e-11e8-aced-3791003a1c93': {
        name: "foo                                     '",
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: '268f3e60-4d7e-11e8-aced-3791003a1c93',
        content: {
          id: '362df640-4d7e-11e8-9990-e3d32a96d540',
          schema: 'dirs'
        }
      },
      '8380bb30-4d7e-11e8-aced-3791003a1c93': {
        name: 'Test Snippets',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: '8380bb30-4d7e-11e8-aced-3791003a1c93',
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525295436586
        },
        content: {
          id: 'e0c30eb0-4e50-11e8-915d-83e9ca8f32cf',
          schema: 'dirs'
        }
      },
      '2f38b780-4e4b-11e8-bd82-c775a5880b5f': {
        name: 'Demo',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/demo',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: '2f38b780-4e4b-11e8-bd82-c775a5880b5f',
        content: {
          id: 'e184ff20-4e50-11e8-915d-83e9ca8f32cf',
          schema: 'dirs'
        },
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525295202427
        }
      },
      'd71f8bd0-4e4c-11e8-be56-6d520015e65e': {
        name: 'Demo (file)',
        url:
          'https://github.com/richardscarrott/test-snippets/blob/master/demo/empty.js',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: 'd71f8bd0-4e4c-11e8-be56-6d520015e65e',
        content: {
          id: 'e24b5c60-4e50-11e8-915d-83e9ca8f32cf',
          schema: 'files'
        },
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525296819609
        }
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
      '04f54530-4d77-11e8-a87e-936d935c183f': {
        id: '04f54530-4d77-11e8-a87e-936d935c183f',
        name: '    fasd   sfad',
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
      '97c95e00-4d7c-11e8-83fd-0180254d46e4': {
        id: '97c95e00-4d7c-11e8-83fd-0180254d46e4',
        name:
          '                                        a d dfefefefefe f ef . fe fe . e f .            ',
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
      'a6912160-4d7d-11e8-83fd-0180254d46e4': {
        id: 'a6912160-4d7d-11e8-83fd-0180254d46e4',
        name: 'dfs sf s',
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
      'f8030b80-4d7d-11e8-83fd-0180254d46e4': {
        id: 'f8030b80-4d7d-11e8-83fd-0180254d46e4',
        name: 'fsda j j dfsj fds ijofweijo ijo w ioj .',
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
      '362df640-4d7e-11e8-9990-e3d32a96d540': {
        id: '362df640-4d7e-11e8-9990-e3d32a96d540',
        name: "foo                                     '",
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
      '8973dd10-4d7e-11e8-9990-e3d32a96d540': {
        id: '8973dd10-4d7e-11e8-9990-e3d32a96d540',
        name: 'Test Snippets',
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
      'cb0c5360-4e46-11e8-b6a7-0b0cb3109a02': {
        id: 'cb0c5360-4e46-11e8-b6a7-0b0cb3109a02',
        name: 'Test Snippets',
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
      '59739900-4e48-11e8-a36f-b19c8f9dcd55': {
        id: '59739900-4e48-11e8-a36f-b19c8f9dcd55',
        name: 'snippets',
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
      'c1c5e070-4e49-11e8-82ad-e77b9b156c52': {
        id: 'c1c5e070-4e49-11e8-82ad-e77b9b156c52',
        name: 'snippets',
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
      '3546f7f0-4e4a-11e8-a8a7-732be13643da': {
        id: '3546f7f0-4e4a-11e8-a8a7-732be13643da',
        name: 'snippets',
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
      '95587970-4e4a-11e8-86df-89ea5dd390c7': {
        id: '95587970-4e4a-11e8-86df-89ea5dd390c7',
        name: 'snippets',
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
      '8471ce881fee48e6507ac447ee809299fe9606a2': {
        id: '8471ce881fee48e6507ac447ee809299fe9606a2',
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
      e0230c1436a39080dab151858285fa0ff5f442da: {
        id: 'e0230c1436a39080dab151858285fa0ff5f442da',
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
      },
      '344f0df0-4e4b-11e8-86df-89ea5dd390c7': {
        id: '344f0df0-4e4b-11e8-86df-89ea5dd390c7',
        name: 'demo',
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
            id: '8471ce881fee48e6507ac447ee809299fe9606a2',
            schema: 'dirs'
          },
          {
            id: 'e0230c1436a39080dab151858285fa0ff5f442da',
            schema: 'dirs'
          }
        ]
      },
      '6ea66600-4e4c-11e8-86df-89ea5dd390c7': {
        id: '6ea66600-4e4c-11e8-86df-89ea5dd390c7',
        name: 'snippets',
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
      '75fee440-4e4c-11e8-86df-89ea5dd390c7': {
        id: '75fee440-4e4c-11e8-86df-89ea5dd390c7',
        name: 'demo',
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
            id: '8471ce881fee48e6507ac447ee809299fe9606a2',
            schema: 'dirs'
          },
          {
            id: 'e0230c1436a39080dab151858285fa0ff5f442da',
            schema: 'dirs'
          }
        ]
      },
      '955951e0-4e4c-11e8-86df-89ea5dd390c7': {
        id: '955951e0-4e4c-11e8-86df-89ea5dd390c7',
        name: 'demo',
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
            id: '8471ce881fee48e6507ac447ee809299fe9606a2',
            schema: 'dirs'
          },
          {
            id: 'e0230c1436a39080dab151858285fa0ff5f442da',
            schema: 'dirs'
          }
        ]
      },
      'b67a9cd0-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b67a9cd0-4e4c-11e8-b94e-8d76aa447f53',
        name: 'payment-cards',
        content: [
          {
            id: 'b6932de0-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          },
          {
            id: 'b693ca20-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          }
        ]
      },
      'b67aeaf0-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b67aeaf0-4e4c-11e8-b94e-8d76aa447f53',
        name: 'utils',
        content: [
          {
            id: 'b6915920-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          },
          {
            id: 'b691f560-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          }
        ]
      },
      'b6639260-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b6639260-4e4c-11e8-b94e-8d76aa447f53',
        name: 'demo',
        content: [
          {
            id: 'b6796450-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          },
          {
            id: 'b67a0090-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'files'
          },
          {
            id: 'b67a9cd0-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'dirs'
          },
          {
            id: 'b67aeaf0-4e4c-11e8-b94e-8d76aa447f53',
            schema: 'dirs'
          }
        ]
      },
      'e0f87690-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0f87690-4e50-11e8-915d-83e9ca8f32cf',
        name: 'account',
        content: [
          {
            id: 'e10d5e20-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e0f9af10-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0f9af10-4e50-11e8-915d-83e9ca8f32cf',
        name: 'foo',
        content: [
          {
            id: 'e12e53a0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e14d2640-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e14d2640-4e50-11e8-915d-83e9ca8f32cf',
        name: 'very-very-nested',
        content: [
          {
            id: 'e162aa10-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e1634650-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e131fd20-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e131fd20-4e50-11e8-915d-83e9ca8f32cf',
        name: 'very-nested',
        content: [
          {
            id: 'e14d2640-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          }
        ]
      },
      'e0fb0ea0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fb0ea0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nested',
        content: [
          {
            id: 'e131fd20-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          }
        ]
      },
      'e0fb5cc0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fb5cc0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nojs',
        content: [
          {
            id: 'e141b490-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e14229c0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e0c30eb0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0c30eb0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'snippets',
        content: [
          {
            id: 'e0f87690-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          },
          {
            id: 'e0f8c4b0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e0f960f0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e0f9af10-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          },
          {
            id: 'e0fa2440-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e0fa9970-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e0fb0ea0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          },
          {
            id: 'e0fb5cc0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          },
          {
            id: 'e0fbd1f0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e0fc4720-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e19ea1a0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e19ea1a0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'payment-cards',
        content: [
          {
            id: 'e1b4c1b0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e1b536e0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e19f16d0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e19f16d0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'utils',
        content: [
          {
            id: 'e1b29ed0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e1b31400-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          }
        ]
      },
      'e184ff20-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e184ff20-4e50-11e8-915d-83e9ca8f32cf',
        name: 'demo',
        content: [
          {
            id: 'e19db740-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e19e5380-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'files'
          },
          {
            id: 'e19ea1a0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
          },
          {
            id: 'e19f16d0-4e50-11e8-915d-83e9ca8f32cf',
            schema: 'dirs'
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
      },
      'b6796450-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b6796450-4e4c-11e8-b94e-8d76aa447f53',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      'b67a0090-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b67a0090-4e4c-11e8-b94e-8d76aa447f53',
        name: 'passenger-details-autofill.js',
        content:
          'Y29uc29sZS5sb2coJ2F1dG9maWxsIHBhc3NlbmdlciBkZXRhaWxzIDEyMycp\nOwo=\n'
      },
      'b6932de0-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b6932de0-4e4c-11e8-b94e-8d76aa447f53',
        name: 'log.js',
        content: 'Cg==\n'
      },
      'b693ca20-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b693ca20-4e4c-11e8-b94e-8d76aa447f53',
        name: 'visa-autofill.js',
        content: 'Y29uc29sZS5sb2coJ3Zpc2EgYXV0b2ZpbGwgMTIzJyk7Cg==\n'
      },
      'b6915920-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b6915920-4e4c-11e8-b94e-8d76aa447f53',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ2xvZyBxdWVyeSAxMjMnKTsK\n'
      },
      'b691f560-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'b691f560-4e4c-11e8-b94e-8d76aa447f53',
        name: 'log.js',
        content: 'Cg==\n'
      },
      'dc750e20-4e4c-11e8-b94e-8d76aa447f53': {
        id: 'dc750e20-4e4c-11e8-b94e-8d76aa447f53',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      '3c5fa6b0-4e4d-11e8-aefc-f979f9aaaafb': {
        id: '3c5fa6b0-4e4d-11e8-aefc-f979f9aaaafb',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      undefined: {
        '0': {
          id: '41c04c90-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'account',
          content: [
            {
              id: '41d3fba0-4e4d-11e8-aefc-f979f9aaaafb',
              name: 'register-autofill.js',
              content:
                'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
            }
          ]
        },
        '1': {
          id: '41c0c1c0-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'barrel-roll.png',
          content: ''
        },
        '2': {
          id: '41c10fe0-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'checkout-autofill.ts',
          content:
            'Y29uc29sZS5sb2coJ1J1bm5pbmcgY2hlY2tvdXQgYXV0b2ZpbGwnKTsKCmNv\nbnN0IHRoaXNTaG91bGROb3RCZUxlYWtlZFRvVGhlR2xvYmFsID0gdHJ1ZTsK\n'
        },
        '3': {
          id: '41c18510-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'foo',
          content: [
            {
              id: '41f0f980-4e4d-11e8-aefc-f979f9aaaafb',
              name: 'bar.js',
              content: 'YWxlcnQoJ1J1bm5pbmcgYmFyJyk7Cg==\n'
            }
          ]
        },
        '4': {
          id: '41c1fa40-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'log-query.js',
          content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgcXVlcnknKTsK\n'
        },
        '5': {
          id: '41c29680-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'log-store.js',
          content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgc3RvcmUnKTsK\n'
        },
        '6': {
          id: '41c2e4a0-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'nested',
          content: [
            {
              id: '41f69ed0-4e4d-11e8-aefc-f979f9aaaafb',
              name: 'very-nested',
              content: [
                {
                  id: '42121610-4e4d-11e8-aefc-f979f9aaaafb',
                  name: 'very-very-nested',
                  content: [
                    {
                      id: '4229bcc0-4e4d-11e8-aefc-f979f9aaaafb',
                      name: 'nested.js',
                      content:
                        'Ly8gbmVzdGVkLmpzCmNvbnNvbGUubG9nKCduZXN0ZWQuanMnKTsK\n'
                    },
                    {
                      id: '422a8010-4e4d-11e8-aefc-f979f9aaaafb',
                      name: 'nested.md',
                      content: 'IyBOZXN0ZWQgbWFya2Rvd24K\n'
                    }
                  ]
                }
              ]
            }
          ]
        },
        '7': {
          id: '41c359d0-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'nojs',
          content: [
            {
              id: '41fdcac0-4e4d-11e8-aefc-f979f9aaaafb',
              name: 'an-image.png',
              content: ''
            },
            {
              id: '41fe18e0-4e4d-11e8-aefc-f979f9aaaafb',
              name: 'some-markdown.md',
              content: ''
            }
          ]
        },
        '8': {
          id: '41c3cf00-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'search-autofill.js',
          content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgc2VhcmNoIGF1dG9maWxsJyk7Cg==\n'
        },
        '9': {
          id: '41c46b40-4e4d-11e8-aefc-f979f9aaaafb',
          name: 'source-autofill.js',
          content:
            'dmFyIHNldElucHV0ID0gKGlucHV0LCB2YWx1ZSkgPT4gewogICAgdmFyIG5h\ndGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlE\nZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwg\nInZhbHVlIikuc2V0OwpuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5w\ndXQsIHZhbHVlKTsKdmFyIGV2MiA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1\nYmJsZXM6IHRydWV9KTsKaW5wdXQuZGlzcGF0Y2hFdmVudChldjIpOwp9OwoK\nc2V0SW5wdXQoJCgnW25hbWU9Im5hbWUiXScpLCAnVHJhaW5saW5lIFdlYicp\nCnNldElucHV0KCQoJ1tuYW1lPSJhcGkiXScpLCAnaHR0cHM6Ly9hcGkuZ2l0\naHViLmNvbScpCnNldElucHV0KCQoJ1tuYW1lPSJhY2Nlc3NUb2tlbiJdJyks\nICcxMGIxYjRmMDdmNjAyZjljNjE3YzlhNGFkMjQ1ZjQ1NjA1YzAyODIwJykK\nLy9zZXRJbnB1dCgkKCdbbmFtZT0iYWNjZXNzVG9rZW4iXScpLCAnMTBiMWI0\nZjA3ZjYwMmY5YzYxN2M5YTRhZDI0NWY0NTYwNWMwMjgyMEJVRycpCnNldElu\ncHV0KCQoJ1tuYW1lPSJvd25lciJdJyksICdyaWNoYXJkc2NhcnJvdHQnKQpz\nZXRJbnB1dCgkKCdbbmFtZT0icmVwbyJdJyksICd0ZXN0LXNuaXBwZXRzJykK\nc2V0SW5wdXQoJCgnW25hbWU9InBhdGgiXScpLCAnc25pcHBldHMnKQo=\n'
        }
      },
      '78c70820-4e50-11e8-9d3f-8f88e766d3de': {
        id: '78c70820-4e50-11e8-9d3f-8f88e766d3de',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      'e10d5e20-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e10d5e20-4e50-11e8-915d-83e9ca8f32cf',
        name: 'register-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
      },
      'e0f8c4b0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0f8c4b0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'barrel-roll.png',
        content: ''
      },
      'e0f960f0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0f960f0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'checkout-autofill.ts',
        content:
          'Y29uc29sZS5sb2coJ1J1bm5pbmcgY2hlY2tvdXQgYXV0b2ZpbGwnKTsKCmNv\nbnN0IHRoaXNTaG91bGROb3RCZUxlYWtlZFRvVGhlR2xvYmFsID0gdHJ1ZTsK\n'
      },
      'e12e53a0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e12e53a0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'bar.js',
        content: 'YWxlcnQoJ1J1bm5pbmcgYmFyJyk7Cg==\n'
      },
      'e0fa2440-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fa2440-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgcXVlcnknKTsK\n'
      },
      'e0fa9970-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fa9970-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log-store.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgc3RvcmUnKTsK\n'
      },
      'e162aa10-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e162aa10-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nested.js',
        content: 'Ly8gbmVzdGVkLmpzCmNvbnNvbGUubG9nKCduZXN0ZWQuanMnKTsK\n'
      },
      'e1634650-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e1634650-4e50-11e8-915d-83e9ca8f32cf',
        name: 'nested.md',
        content: 'IyBOZXN0ZWQgbWFya2Rvd24K\n'
      },
      'e141b490-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e141b490-4e50-11e8-915d-83e9ca8f32cf',
        name: 'an-image.png',
        content: ''
      },
      'e14229c0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e14229c0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'some-markdown.md',
        content: ''
      },
      'e0fbd1f0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fbd1f0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'search-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgc2VhcmNoIGF1dG9maWxsJyk7Cg==\n'
      },
      'e0fc4720-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e0fc4720-4e50-11e8-915d-83e9ca8f32cf',
        name: 'source-autofill.js',
        content:
          'dmFyIHNldElucHV0ID0gKGlucHV0LCB2YWx1ZSkgPT4gewogICAgdmFyIG5h\ndGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlE\nZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwg\nInZhbHVlIikuc2V0OwpuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5w\ndXQsIHZhbHVlKTsKdmFyIGV2MiA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1\nYmJsZXM6IHRydWV9KTsKaW5wdXQuZGlzcGF0Y2hFdmVudChldjIpOwp9OwoK\nc2V0SW5wdXQoJCgnW25hbWU9Im5hbWUiXScpLCAnVHJhaW5saW5lIFdlYicp\nCnNldElucHV0KCQoJ1tuYW1lPSJhcGkiXScpLCAnaHR0cHM6Ly9hcGkuZ2l0\naHViLmNvbScpCnNldElucHV0KCQoJ1tuYW1lPSJhY2Nlc3NUb2tlbiJdJyks\nICcxMGIxYjRmMDdmNjAyZjljNjE3YzlhNGFkMjQ1ZjQ1NjA1YzAyODIwJykK\nLy9zZXRJbnB1dCgkKCdbbmFtZT0iYWNjZXNzVG9rZW4iXScpLCAnMTBiMWI0\nZjA3ZjYwMmY5YzYxN2M5YTRhZDI0NWY0NTYwNWMwMjgyMEJVRycpCnNldElu\ncHV0KCQoJ1tuYW1lPSJvd25lciJdJyksICdyaWNoYXJkc2NhcnJvdHQnKQpz\nZXRJbnB1dCgkKCdbbmFtZT0icmVwbyJdJyksICd0ZXN0LXNuaXBwZXRzJykK\nc2V0SW5wdXQoJCgnW25hbWU9InBhdGgiXScpLCAnc25pcHBldHMnKQo=\n'
      },
      'e19db740-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e19db740-4e50-11e8-915d-83e9ca8f32cf',
        name: 'empty.js',
        content: 'Cg==\n'
      },
      'e19e5380-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e19e5380-4e50-11e8-915d-83e9ca8f32cf',
        name: 'passenger-details-autofill.js',
        content:
          'Y29uc29sZS5sb2coJ2F1dG9maWxsIHBhc3NlbmdlciBkZXRhaWxzIDEyMycp\nOwo=\n'
      },
      'e1b4c1b0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e1b4c1b0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log.js',
        content: 'Cg==\n'
      },
      'e1b536e0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e1b536e0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'visa-autofill.js',
        content: 'Y29uc29sZS5sb2coJ3Zpc2EgYXV0b2ZpbGwgMTIzJyk7Cg==\n'
      },
      'e1b29ed0-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e1b29ed0-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ2xvZyBxdWVyeSAxMjMnKTsK\n'
      },
      'e1b31400-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e1b31400-4e50-11e8-915d-83e9ca8f32cf',
        name: 'log.js',
        content: 'Cg==\n'
      },
      'e24b5c60-4e50-11e8-915d-83e9ca8f32cf': {
        id: 'e24b5c60-4e50-11e8-915d-83e9ca8f32cf',
        name: 'empty.js',
        content: 'Cg==\n'
      }
    }
  },
  sources: {
    meta: {
      'fcbe26c0-4d76-11e8-b555-8b61f2cc806d': {
        status: 'SUCCESS',
        receivedAt: 1525203422713,
        deleted: true
      },
      '8d06b2b0-4d7c-11e8-874b-9dd2db0d9840': {
        status: 'SUCCESS',
        receivedAt: 1525205816591,
        deleted: true
      },
      'a1b16b50-4d7d-11e8-a155-1772a868f659': {
        status: 'SUCCESS',
        receivedAt: 1525206270717,
        deleted: true
      },
      'e84ef6e0-4d7d-11e8-aed5-e572e0a14711': {
        status: 'SUCCESS',
        receivedAt: 1525206407556,
        deleted: true
      },
      '268f3e60-4d7e-11e8-aced-3791003a1c93': {
        status: 'SUCCESS',
        receivedAt: 1525206511648,
        deleted: true
      },
      '8380bb30-4d7e-11e8-aced-3791003a1c93': {
        status: 'SUCCESS',
        receivedAt: 1525296992400
      },
      '2f38b780-4e4b-11e8-bd82-c775a5880b5f': {
        status: 'SUCCESS',
        receivedAt: 1525296992735
      },
      'd71f8bd0-4e4c-11e8-be56-6d520015e65e': {
        status: 'SUCCESS',
        receivedAt: 1525296993718,
        deleted: true
      }
    },
    data: [
      'fcbe26c0-4d76-11e8-b555-8b61f2cc806d',
      '8d06b2b0-4d7c-11e8-874b-9dd2db0d9840',
      'a1b16b50-4d7d-11e8-a155-1772a868f659',
      'e84ef6e0-4d7d-11e8-aed5-e572e0a14711',
      '268f3e60-4d7e-11e8-aced-3791003a1c93',
      '8380bb30-4d7e-11e8-aced-3791003a1c93',
      '2f38b780-4e4b-11e8-bd82-c775a5880b5f',
      'd71f8bd0-4e4c-11e8-be56-6d520015e65e'
    ]
  },
  form: {},
  ui: {
    snackbar: {
      type: '',
      payload: {
        name: 'Demo (file)',
        url:
          'https://github.com/richardscarrott/test-snippets/blob/master/demo/empty.js',
        accessToken: '9f04ec0c793d4445635b73e95362d3cfd1ecabd4',
        id: 'd71f8bd0-4e4c-11e8-be56-6d520015e65e',
        content: {
          id: 'e24b5c60-4e50-11e8-915d-83e9ca8f32cf',
          name: 'empty.js',
          content: 'Cg==\n'
        },
        meta: {
          status: 'SUCCESS',
          receivedAt: 1525296993718
        }
      }
    }
  },
  _persist: {
    version: 1,
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
