export class RequestError extends Error {
  name: string;

  status: number;

  constructor(status, ...params) {
    super(...params);

    this.name = 'RequestError';
    this.status = status;
  }
}
