import axios from 'axios';
import Users from '../Users';

jest.mock('axios');

function forEach(items, callback) {
  items.map(item => callback(item));
}

const mockCallback = jest.fn(x => x * 2);

describe('forEach tests', () => {
  it('should test callback works as expected', () => {
    forEach([1, 2], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(1);

    expect(mockCallback.mock.calls[1][0]).toBe(2);
  });
});

describe('mock return values', () => {
  it('should be able mock values for the function', () => {
    const myMock = jest.fn();

    myMock.mockReturnValueOnce(10).mockReturnValueOnce(12).mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
  });

  it('mock values can be used to test behavior', () => {
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(filterTestFn);

    console.log(result);
    console.log(filterTestFn.mock.calls.length);
  });

  test('should fetch users', () => {
    const resp = { data: [{ name: 'Punith' }, { name: 'Umesh' }] };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then(users => expect(users).toEqual(resp.data));
  });
});
