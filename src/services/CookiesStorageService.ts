// CookiesStorageService.js
import Cookies from "js-cookie";

const CookiesStorageService = (function () {
  let _service: any;

  function _getService(this: {
    getService: () => any;
    setToken: (accessToken: any) => void;
    setUserInfo: (user: any) => void;
    getUserInfo: () => any;
    getAccessToken: () => any;
    clearToken: () => void;
  }) {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setToken(accessToken: any) {
    Cookies.set("access_token", accessToken);
  }

  function _setUserInfo(user: any) {
    Cookies.set("user", user);
  }

  function _getUserInfo() {
    return Cookies.get("user");
  }

  function _getAccessToken() {
    return Cookies.get("access_token");
  }

  function _clearToken() {
    Cookies.remove("access_token");
    Cookies.remove("user");
  }

  return {
    getService: _getService,
    setToken: _setToken,
    setUserInfo: _setUserInfo,
    getUserInfo: _getUserInfo,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  };
})();

export default CookiesStorageService;
