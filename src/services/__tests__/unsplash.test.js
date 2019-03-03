import unsplash from '../unsplash';
import mockAxios from 'axios';
import axios from 'axios';

jest.mock('axios');
// or mock using __mocks__

describe('Async tests for unsplash api', () => {
  it('should get images from unsplash', async () => {
    // mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { results: ['dog1.jpg'] } }));
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { results: ['dog-1.jpg'] } }));
    const images = await unsplash('dog');

    expect(images).toEqual(['dog-1.jpg']);
    expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledWith(""); // pass the complete url as it is passed to actual axios
  });
});