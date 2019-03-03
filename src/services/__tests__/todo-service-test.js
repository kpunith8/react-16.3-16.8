import axios from 'axios';
import { loadTitle } from '../todo-service';

jest.mock('axios');

describe('Test todo service', () => {
  it('Should print an uppercase text', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { title: 'Todo one' } }));
    const title = await loadTitle();

    expect(title).toBe('TODO ONE');
  });
});