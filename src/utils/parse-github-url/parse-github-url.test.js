import { parseGitHubUrl } from './parse-github-url';

describe('no path', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware',
    'https://github.com/60frames/webpack-hot-server-middleware/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: null
      });
    });
  });
});

describe('path', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/src',
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/src/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: '/src'
      });
    });
  });
});

describe('nested path', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/src/snippets',
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/src/snippets/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: '/src/snippets'
      });
    });
  });
});

describe('file path', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/foo.js'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: '/foo.js'
      });
    });
  });
});

describe('nested file path', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware/tree/master/src/snippets/foo.js'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: '/src/snippets/foo.js'
      });
    });
  });
});

describe('branch', () => {
  [
    'https://github.com/60frames/webpack-hot-server-middleware/tree/develop/src',
    'https://github.com/60frames/webpack-hot-server-middleware/tree/develop/src/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://api.github.com',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'develop',
        path: '/src'
      });
    });
  });
});

describe('enterprise', () => {
  [
    'https://github.google.com/60frames/webpack-hot-server-middleware/tree/master/src',
    'https://github.google.com/60frames/webpack-hot-server-middleware/tree/master/src/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(parseGitHubUrl(url)).toEqual({
        api: 'https://github.google.com/api/v3/',
        owner: '60frames',
        repo: 'webpack-hot-server-middleware',
        branch: 'master',
        path: '/src'
      });
    });
  });
});

describe('unrecognised', () => {
  [
    'https://richardscarrott.co.uk/blog/post/rendering-big-lists-in-react/'
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(() => parseGitHubUrl(url)).not.toThrow();
    });
  });
});

describe('malformed', () => {
  [
    '//richardscarrottcouk/blog/post/rendering-big-lists-in-react/',
    'https/richardscarrott.co.uk/blog/post/rendering-big-lists-in-react/',
    'https://richardscarrottcouk/blog/post/rendering-big-lists-in-react/',
    'https://richardscarrottcouk',
    'richardscarrottcouk',
    '/blog/post/rendering-big-lists-in-react/',
    'blog/post/rendering-big-lists-in-react',
    '$$.richard^scarrott/*',
    '',
    ' '
  ].forEach(url => {
    it(`handles ${url}`, () => {
      expect(() => parseGitHubUrl(url)).not.toThrow();
    });
  });
});

describe('non-string', () => {
  [null, undefined, false, true, 1, 0, {}, [], /test/].forEach(url => {
    it(`handles ${url}`, () => {
      expect(() => parseGitHubUrl(url)).toThrow(
        new Error('Expected `url` to be of type `string`')
      );
    });
  });
});
