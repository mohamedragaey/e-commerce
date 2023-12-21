/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */
import arMessages from "../../translations/ar.json";
import { LocalStorageService } from "../LocalStorageService";

class Configuration {
  static BASE_URL = process.env.ENDPOINT_URL;
  static Auth_Endpoints = {
    login: "auth/login",
    signup: "auth/signup",
  };
  static Local = LocalStorageService.get("UnitedOFOQApplicantAppLanguage");
  static DefaultLocale = "en";
  static DefaultDirection = "ltr";
  static DefaultFont = "Cairo";
  static DefaultMessage = arMessages;
}

export default Configuration;
