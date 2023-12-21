/**
 * Rest Client class
 * Responsible for consuming Api endpoints
 *
 * * getRequest
 * * postRequest
 * * putRequest
 * * deleteRequest
 */
import axios from "axios";
import "../axios";

interface getRequestParams {
  url: string;
  config: any;
  setError: any;
  setFormLoading: any;
  FormikActions: any;
}

interface postRequestParams extends getRequestParams {
  data: any;
}

interface putRequestParams extends postRequestParams {}

interface deleteRequestParams extends getRequestParams {}

class RestClient {
  static getRequest = async ({
    url,
    config,
    setError,
    setFormLoading,
    FormikActions,
  }: getRequestParams) => {
    return await axios
      .get(url, config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log("Get-request-error:", error);

        !!FormikActions ? FormikActions.setSubmitting(false) : null;

        !!setFormLoading ? setFormLoading(false) : null;

        !!setError ? setError(error) : "";
      });
  };

  static async postRequest({
    url,
    data,
    config,
    setError,
    setFormLoading,
    FormikActions,
  }: postRequestParams) {
    try {
      const response = await axios.post(url, data, config);
      return response;
    } catch (error) {
      console.log("Post-request-error:", error);

      !!FormikActions ? FormikActions.setSubmitting(false) : null;

      !!setFormLoading ? setFormLoading(false) : null;

      !!setError ? setError(error) : "";
    }
  }

  static async putRequest({
    url,
    data,
    config,
    setError,
    setFormLoading,
    FormikActions,
  }: putRequestParams) {
    try {
      const response = await axios.put(url, data, config);
      return response;
    } catch (error) {
      console.log("Post-request-error:", error);

      !!FormikActions ? FormikActions.setSubmitting(false) : null;

      !!setFormLoading ? setFormLoading(false) : null;

      !!setError ? setError(error) : "";
    }
  }

  static async deleteRequest({
    url,
    config,
    setError,
    setFormLoading,
    FormikActions,
  }: deleteRequestParams) {
    try {
      const response = await axios.delete(url, config);
      return response;
    } catch (error) {
      console.log("Post-request-error:", error);

      !!FormikActions ? FormikActions.setSubmitting(false) : null;

      !!setFormLoading ? setFormLoading(false) : null;

      !!setError ? setError(error) : "";
    }
  }
}

export default RestClient;
