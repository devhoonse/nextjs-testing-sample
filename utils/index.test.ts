import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug
} from './index';

// cutTextToLength 함수를 테스트합니다.
describe('cutTextToLength', function () {
  test('Should cut a string that exceeds 10 characters.', () => {
    const initialString = 'This is a 35 characters long string';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('This is a ...');
  });

  test(`Should not cut a string if it's shorter than 10 characters.`, () => {
    const initialString = '7 chars';
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual('7 chars');
  });
});

// slugify 함수를 테스트합니다.
describe('slugify makes a string URL-safe', function () {
  test('Should convert a string to URL-safe format.', () => {
    const initialString = 'This is a string to slugify';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });

  test('Should slugify a string with special characters.', () => {
    const initialString = 'This is a string to slugify!@#$%^&*()+';
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual('this-is-a-string-to-slugify');
  });
});

// composeArticleSlug 함수를 테스트합니다.
describe('composeArticleSlug should create a complete article URL given a title and an ID', () => {
  test('Should create a complete article URL', () => {
    const title = 'This is a title';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });

  test('Should create a complete article URL with special characters', () => {
    const title = 'This is a title!@#$%^&*()+';
    const id = 'j81j91s';
    const articleSlug = composeArticleSlug(id, title);
    expect(articleSlug).toEqual('this-is-a-title-j81j91s');
  });
});

// extractArticleIdFromSlug 함수를 테스트합니다.
describe('extractArticleIdFromSlug should correctly extract the ID out of an article URL', () => {
  test('Should correctly extract the ID out of an article URL', () => {
    const articleUrl = 'this-is-a-title-j81j91s';
    const id = extractArticleIdFromSlug(articleUrl);
    expect(id).toEqual('j81j91s');
  });
});
