describe('TypeScriptとJestのテスト　値チェック', () => {
  it('基本的なテスト', () => {
    const a = 10;
    expect(a).toBe(10);
  });
});

describe('TypeScriptとJestのテスト　例外チェック', () => {
  it('例外のテスト', () => {
    const testFunction = () => {
      throw new Error();
    };
    expect(testFunction).toThrow(Error);
  });
});

describe('TypeScriptとJestのテスト　非同期チェック', () => {
  it('非同期のテスト', async () => {
    const testFunction = async () => {
      return 10;
    };
    await expect(testFunction()).resolves.toEqual(10);
  });
});

describe('TypeScriptとJestのテスト　非同期例外チェック', () => {
  it('非同期の例外テスト', async () => {
    const testFunction = async () => {
      throw new Error();
    };
    await expect(testFunction()).rejects.toBeInstanceOf(Error);
  });
});
