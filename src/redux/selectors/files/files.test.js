import { filePathsSelector } from './files';

const state = {
  entities: {
    sources: {
      'e9e84e90-52ee-11e8-ac0c-b93e83eaf21a': {
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets',
        name: 'Test',
        accessToken: '35c2725f65e15f48a4becc6c8b3dec39d4029ce1',
        id: 'e9e84e90-52ee-11e8-ac0c-b93e83eaf21a',
        content: [
          {
            id: '14302100-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          },
          {
            id: '14477990-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '144e5760-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '1450ef70-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          },
          {
            id: '1452c430-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '144f41c0-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '144fde00-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          },
          {
            id: '145f4750-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          },
          {
            id: '14667340-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '146784b0-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      },
      '166b6b00-52ef-11e8-ac0c-b93e83eaf21a': {
        name: 'Test (file)',
        accessToken: '35c2725f65e15f48a4becc6c8b3dec39d4029ce1',
        url:
          'https://github.com/richardscarrott/test-snippets/tree/master/snippets/account/register-autofill.js',
        id: '166b6b00-52ef-11e8-ac0c-b93e83eaf21a',
        content: [
          {
            id: '26a0bd90-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      }
    },
    dirs: {
      '14302100-52ef-11e8-9986-dd586b391786': {
        id: '14302100-52ef-11e8-9986-dd586b391786',
        name: 'account',
        content: [
          {
            id: '14670f80-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      },
      '1450ef70-52ef-11e8-9986-dd586b391786': {
        id: '1450ef70-52ef-11e8-9986-dd586b391786',
        name: 'foo',
        content: [
          {
            id: '1467f9e0-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      },
      '147f5270-52ef-11e8-9986-dd586b391786': {
        id: '147f5270-52ef-11e8-9986-dd586b391786',
        name: 'very-very-nested',
        content: [
          {
            id: '1495c0a0-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '14980a90-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      },
      '14667341-52ef-11e8-9986-dd586b391786': {
        id: '14667341-52ef-11e8-9986-dd586b391786',
        name: 'very-nested',
        content: [
          {
            id: '147f5270-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          }
        ]
      },
      '144fde00-52ef-11e8-9986-dd586b391786': {
        id: '144fde00-52ef-11e8-9986-dd586b391786',
        name: 'nested',
        content: [
          {
            id: '14667341-52ef-11e8-9986-dd586b391786',
            schema: 'dirs'
          }
        ]
      },
      '145f4750-52ef-11e8-9986-dd586b391786': {
        id: '145f4750-52ef-11e8-9986-dd586b391786',
        name: 'nojs',
        content: [
          {
            id: '147e4100-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          },
          {
            id: '147fa090-52ef-11e8-9986-dd586b391786',
            schema: 'files'
          }
        ]
      }
    },
    files: {
      '14670f80-52ef-11e8-9986-dd586b391786': {
        id: '14670f80-52ef-11e8-9986-dd586b391786',
        name: 'register-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
      },
      '14477990-52ef-11e8-9986-dd586b391786': {
        id: '14477990-52ef-11e8-9986-dd586b391786',
        name: 'barrel-roll.png',
        content: ''
      },
      '144e5760-52ef-11e8-9986-dd586b391786': {
        id: '144e5760-52ef-11e8-9986-dd586b391786',
        name: 'checkout-autofill.ts',
        content:
          'Y29uc29sZS5sb2coJ1J1bm5pbmcgY2hlY2tvdXQgYXV0b2ZpbGwnKTsKCmNv\nbnN0IHRoaXNTaG91bGROb3RCZUxlYWtlZFRvVGhlR2xvYmFsID0gdHJ1ZTsK\n'
      },
      '1467f9e0-52ef-11e8-9986-dd586b391786': {
        id: '1467f9e0-52ef-11e8-9986-dd586b391786',
        name: 'bar.js',
        content: 'YWxlcnQoJ1J1bm5pbmcgYmFyJyk7Cg==\n'
      },
      '1452c430-52ef-11e8-9986-dd586b391786': {
        id: '1452c430-52ef-11e8-9986-dd586b391786',
        name: 'log-query.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgcXVlcnknKTsK\n'
      },
      '144f41c0-52ef-11e8-9986-dd586b391786': {
        id: '144f41c0-52ef-11e8-9986-dd586b391786',
        name: 'log-store.js',
        content: 'Y29uc29sZS5sb2coJ0xvZ2dpbmcgc3RvcmUnKTsK\n'
      },
      '1495c0a0-52ef-11e8-9986-dd586b391786': {
        id: '1495c0a0-52ef-11e8-9986-dd586b391786',
        name: 'nested.js',
        content: 'Ly8gbmVzdGVkLmpzCmNvbnNvbGUubG9nKCduZXN0ZWQuanMnKTsK\n'
      },
      '14980a90-52ef-11e8-9986-dd586b391786': {
        id: '14980a90-52ef-11e8-9986-dd586b391786',
        name: 'nested.md',
        content: 'IyBOZXN0ZWQgbWFya2Rvd24K\n'
      },
      '147e4100-52ef-11e8-9986-dd586b391786': {
        id: '147e4100-52ef-11e8-9986-dd586b391786',
        name: 'an-image.png',
        content: ''
      },
      '147fa090-52ef-11e8-9986-dd586b391786': {
        id: '147fa090-52ef-11e8-9986-dd586b391786',
        name: 'some-markdown.md',
        content: ''
      },
      '14667340-52ef-11e8-9986-dd586b391786': {
        id: '14667340-52ef-11e8-9986-dd586b391786',
        name: 'search-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgc2VhcmNoIGF1dG9maWxsJyk7Cg==\n'
      },
      '146784b0-52ef-11e8-9986-dd586b391786': {
        id: '146784b0-52ef-11e8-9986-dd586b391786',
        name: 'source-autofill.js',
        content:
          'dmFyIHNldElucHV0ID0gKGlucHV0LCB2YWx1ZSkgPT4gewogICAgdmFyIG5h\ndGl2ZUlucHV0VmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlE\nZXNjcmlwdG9yKHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwg\nInZhbHVlIikuc2V0OwpuYXRpdmVJbnB1dFZhbHVlU2V0dGVyLmNhbGwoaW5w\ndXQsIHZhbHVlKTsKdmFyIGV2MiA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1\nYmJsZXM6IHRydWV9KTsKaW5wdXQuZGlzcGF0Y2hFdmVudChldjIpOwp9OwoK\nc2V0SW5wdXQoJCgnW25hbWU9Im5hbWUiXScpLCAnVHJhaW5saW5lIFdlYicp\nCnNldElucHV0KCQoJ1tuYW1lPSJhcGkiXScpLCAnaHR0cHM6Ly9hcGkuZ2l0\naHViLmNvbScpCnNldElucHV0KCQoJ1tuYW1lPSJhY2Nlc3NUb2tlbiJdJyks\nICcxMGIxYjRmMDdmNjAyZjljNjE3YzlhNGFkMjQ1ZjQ1NjA1YzAyODIwJykK\nLy9zZXRJbnB1dCgkKCdbbmFtZT0iYWNjZXNzVG9rZW4iXScpLCAnMTBiMWI0\nZjA3ZjYwMmY5YzYxN2M5YTRhZDI0NWY0NTYwNWMwMjgyMEJVRycpCnNldElu\ncHV0KCQoJ1tuYW1lPSJvd25lciJdJyksICdyaWNoYXJkc2NhcnJvdHQnKQpz\nZXRJbnB1dCgkKCdbbmFtZT0icmVwbyJdJyksICd0ZXN0LXNuaXBwZXRzJykK\nc2V0SW5wdXQoJCgnW25hbWU9InBhdGgiXScpLCAnc25pcHBldHMnKQo=\n'
      },
      '26a0bd90-52ef-11e8-9986-dd586b391786': {
        id: '26a0bd90-52ef-11e8-9986-dd586b391786',
        name: 'register-autofill.js',
        content: 'Y29uc29sZS5sb2coJ1J1bm5pbmcgcmVnaXN0ZXIgYXV0b2ZpbGwnKTsK\n'
      }
    }
  },
  sources: {
    meta: {
      'e9e84e90-52ee-11e8-ac0c-b93e83eaf21a': {
        status: 'SUCCESS',
        receivedAt: 1525804743099
      },
      '166b6b00-52ef-11e8-ac0c-b93e83eaf21a': {
        status: 'SUCCESS',
        receivedAt: 1525804773354
      }
    },
    data: [
      'e9e84e90-52ee-11e8-ac0c-b93e83eaf21a',
      '166b6b00-52ef-11e8-ac0c-b93e83eaf21a'
    ]
  }
};

describe('filePathsSelector', () => {
  it('works', () => {
    expect(filePathsSelector(state)).toMatchSnapshot();
  });
});
