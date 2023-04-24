export enum TRPCErrorCode {
  /**
   * The server cannot or will not process the request due to something that is perceived to be a client error.
   */
  BAD_REQUEST = 'BAD_REQUEST',
  /**
   * The client request has not been completed because it lacks valid authentication credentials for the requested resource.
   */
  UNAUTHORIZED = 'UNAUTHORIZED',
  /**
   * The server was unauthorized to access a required data source, such as a REST API.
   */
  FORBIDDEN = 'FORBIDDEN',
  /**
   * The server cannot find the requested resource.
   */
  NOT_FOUND = 'NOT_FOUND',
  /**
   * The server would like to shut down this unused connection.
   */
  TIMEOUT = 'TIMEOUT',
  /**
   * The server request resource conflict with the current state of the target resource.
   */
  CONFLICT = 'CONFLICT',
  /**
   * Access to the target resource has been denied.
   */
  PRECONDITION_FAILED = 'PRECONDITION_FAILED',
  /**
   * Request entity is larger than limits defined by server.
   */
  PAYLOAD_TOO_LARGE = 'PAYLOAD_TOO_LARGE',
  /**
   * The server knows the request method, but the target resource doesn't support this method.
   */
  METHOD_NOT_SUPPORTED = 'METHOD_NOT_SUPPORTED',
  /**
   * The server understands the request method, and the request entity is correct, but the server was unable to process it.
   */
  UNPROCESSABLE_CONTENT = 'UNPROCESSABLE_CONTENT',
  /**
   * The rate limit has been exceeded or too many requests are being sent to the server.
   */
  TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
  /**
   * Access to the resource has been denied.
   */
  CLIENT_CLOSED_REQUEST = 'CLIENT_CLOSED_REQUEST',
  /**
   * An unspecified error occurred.
   */
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}
