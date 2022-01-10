export interface IServer {
  getAuthenticityToken: () => string;
  get: (url: string) => Promise<Response>,
  post: (url: string, data: object) => Promise<Response>,
  put: (url: string, data?: object) => Promise<Response>,
  delete: (url: string) => Promise<Response>,
  patch: (url: string, data?: object) => Promise<Response>,
}
