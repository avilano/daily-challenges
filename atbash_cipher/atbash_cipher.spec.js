const atbash = require('./atbash_cipher');

describe('encode', () => {

  it('encodes no', () => {
    expect(atbash.encode('no')).toEqual('ml');
  });

  it('encodes yes', () => {
    expect(atbash.encode('yes')).toEqual('bvh');
  });

  it('encodes TEST', () => {
    expect(atbash.encode('TEST')).toEqual('lnt');
  });

  it('decodes TEST ', () => {
    expect(atbash.decode('GVHG'))
      .toEqual('TEST');
  });
});
