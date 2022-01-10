import { IServer } from './types';
import { RequestError } from '../../errors';

const getCsrfToken = () => {
  const metaElement: HTMLMetaElement = document.querySelector('meta[name="csrf-token"]');
  return metaElement.content;
};

const buildRequest = async (url: string, method: string, data: object = {}):Promise<Response> => {
  const request: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET') {
    request.headers['X-CSRF-Token'] = getCsrfToken();

    request.body = JSON.stringify(data);
  }

  const response = await fetch(url, request);
  if (!response.ok) {
    const message = await response.json();
    throw new RequestError(response.status, message.error);
  }

  return response;
};

export const server: IServer = {
  getAuthenticityToken: () => getCsrfToken(),
  get: (url) => buildRequest(url, 'GET'),
  post: (url, data) => buildRequest(url, 'POST', data),
  put: (url, data) => buildRequest(url, 'PUT', data),
  delete: (url) => buildRequest(url, 'DELETE'),
  patch: (url, data) => buildRequest(url, 'PATCH', data),
};
