import { startsWith, endsWith, keys, isEmpty } from 'lodash';
import { RequestMethod, LocalStorage } from 'src/constants';
import { RequestErrorMessage } from 'src/constants/messages';
import { RequestActions } from 'src/types/Request';
import Redux from './Redux';

export interface RequestOptions {
  isFormData?: boolean,
  headers?: object,
  dontUseToken?: boolean,
  doneShowLoading?: boolean,
}

export interface Response {
  success: boolean,
  data?: any,
  error?: any,
}

export default class Request {
  private endpoint: string;
  private method: RequestMethod;
  private options: RequestOptions;
  private params: any;

  /**
   * Format Request endpoint for request
   */
  private getEndpoint(): any {
    if (endsWith(process.env.REACT_APP_API_ENDPOINT, '/')) {
      throw new Error('Your endpoint from ENV variable should not end with `/`');
    }

    if (startsWith(this.endpoint, '/') === false) {
      throw new Error('Your request endpoint should be start with `/`');
    }

    return `${process.env.REACT_APP_API_ENDPOINT}${this.endpoint}`;
  }

  /**
   * Format headers for request
   */
  private get headers() {
    const headers: object = this.options.headers || {};

    // Add header: Content-Type
    if (!this.options.isFormData) {
      headers['Content-Type'] = 'application/json'
    }

    // Add header: Authorization
    if (!this.options.dontUseToken) {
      const accessToken = localStorage.getItem(LocalStorage.ACCESS_TOKEN);

      if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    return headers;
  }

  private getParams(): any {
    if (isEmpty(this.params)) {
      return null;
    }

    if ([RequestMethod.GET, RequestMethod.HEAD].indexOf(this.method) > -1) {
      const urlParams: string = keys(this.params).map((key: string) => `${key}=${this.params[key]}`).join('&');
      this.endpoint = `${this.endpoint}?${urlParams}`;
      return;
    }

    if (this.options.isFormData) {
      return this.params;
    }

    return JSON.stringify(this.params);
  }

  private async request(): Promise<Response> {
    const globalActions: any = Redux.getGlobalActions(['request']);
    const requestActions: RequestActions = globalActions.requestActions;
    requestActions.start();

    const request: any = {
      method: this.method,
      headers: this.headers,
      body: this.getParams(),
    };

    const response: Response = {
      success: false,
    };

    try {
      const fetchResponse: any = await fetch(this.getEndpoint(), request);
      const statusCode: number = fetchResponse.status;

      if (statusCode !== 200) {
        throw new Error(fetchResponse.statusText || RequestErrorMessage[statusCode]);
      }

      // Get json data
      response.data = await fetchResponse.json();
      response.success = true;
    } catch (error) {
      console.log('Request', error);

      response.error = error.message;
    } finally {
      requestActions.end();

      return response;
    }
  }

  public async get(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.GET;
    this.params = params;
    this.options = options;

    return await this.request();
  }

  public async post(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.POST;
    this.params = params;
    this.options = options;

    return await this.request();
  }

  public async postFormData(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.POST;
    this.params = params;
    this.options = options;

    return await this.request();
  }

  public async put(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.PUT;
    this.params = params;
    this.options = options;

    return await this.request();
  }

  public async delete(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.DELETE;
    this.params = params;
    this.options = options;

    return await this.request();
  }

  public async head(endpoint: string, params: any = {}, options: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.method = RequestMethod.HEAD;
    this.params = params;
    this.options = options;

    return await this.request();
  }
}
