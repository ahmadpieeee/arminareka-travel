// error messages
export interface StatusMessages {
  [statusCode: number]: string
}
export const commonError: string = 'An error occurred while fetching the data'
export const statusMessages: StatusMessages = {
  400: '400 Bad Request: The server cannot process the request due to a client error.',
  401: '401 Unauthorized: Authentication is required or has failed.',
  402: '402 Payment Required: Payment is required to access the requested resource.',
  403: '403 Forbidden: The server understood the request, but the client is not allowed to access the requested resource.',
  404: '404 Not Found: The requested resource could not be found on the server.',
  405: '405 Method Not Allowed: The requested HTTP method is not supported for the requested resource.',
  408: '408 Request Timeout',
  413: '413 Content Too Large',
  429: '429 Too Many Requests',
  500: '500 Internal Server Error',
  501: '501 The server does not support the functionality required to fulfill the request',
  502: '502 Bad Gateway',
  503: '503 Service Unavailable, The server is not ready to handle the request.',
  504: '504 Gateway Timeout',
  505: '505 HTTP Version Not Supported',
}
