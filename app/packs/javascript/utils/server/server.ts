import { IServer } from './types'

const getCsrfToken = () => {
  const metaElement: HTMLMetaElement = document.querySelector('meta[name="csrf-token"]')
  return metaElement.content
}

const buildRequest = (url: string, method: string, data: object = {}):Promise<Response> => {
  const request: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (method !== 'GET') {
    request.headers['X-CSRF-Token'] = getCsrfToken();

    request.body = JSON.stringify(data)
  }

  return fetch(url, request)
}

export const server: IServer = {
  getAuthenticityToken: () => getCsrfToken(),
  get: (url) => buildRequest(url, 'GET'),
  post: (url, data) => buildRequest(url, 'POST', data),
  put: (url, data) => buildRequest(url, 'PUT', data),
  delete: (url) => buildRequest(url, 'DELETE'),
}
