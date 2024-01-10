import request from 'supertest';
import { Express } from 'express'; // Assuming you use Express.js
import { createServer } from 'http';

// Mocking Express application
const mockApp: Express = {
  // Mocking the needed Express methods used in controllers
  post: jest.fn(),
  get: jest.fn(),
  put: jest.fn(),
} as unknown as Express;

describe('API Tests', () => {
  let server: ReturnType<typeof createServer>;

  beforeAll((done) => {
    server = createServer(mockApp);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should add a task via /api/addTask', async () => {
    const newTask = { title: 'New Task', description: 'Task description' };

    // Mocking the controller behavior
    (mockApp.post as jest.Mock).mockImplementation((path, handler) => {
      handler({ body: newTask }, {
        json: (responseBody: Record<string, unknown>) => {
          expect(responseBody).toHaveProperty('taskId');
        },
      });
    });

    await request(server)
      .post('/api/addTask')
      .send(newTask)
      .expect(200);
  });
});



