/**
 * General Services class
 */
import { AxiosResponse } from "axios";
import RestClient from "../Client/RestClient";

class AuthServices {
  /**
   *
   * @param url
   * @param data
   * @param config
   * @param setFormLoading
   * @param setFailure
   * @param FormikActions
   * @param setError
   * @param setRedirect
   * @returns {Promise<AxiosResponse<any> | void>}
   */
  static login(
    url: any,
    data: any,
    config: any,
    setFormLoading: any,
    FormikActions: any,
    setError: any
  ): Promise<AxiosResponse<any> | void> {
    return RestClient.postRequest({
      url,
      data,
      config,
      setError,
      setFormLoading,
      FormikActions,
    });
  }

  /**
   *
   * @param url
   * @param data
   * @param config
   * @param setFormLoading
   * @param setFailure
   * @param FormikActions
   * @param setError
   * @param setRedirect
   * @returns {Promise<AxiosResponse<any> | void>}
   */
  static signup(
    url: any,
    data: any,
    config: any,
    setFormLoading: any,
    FormikActions: any,
    setError: any
  ): Promise<AxiosResponse<any> | void> {
    return RestClient.postRequest({
      url,
      data,
      config,
      setError,
      setFormLoading,
      FormikActions,
    });
  }
}

export default AuthServices;
