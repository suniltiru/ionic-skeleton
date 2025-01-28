export class DeviceUtil {
    /**
     * Checks if the current platform is a mobile device.
     * @returns {boolean} True if mobile, false otherwise.
     */
    static isMobile(): boolean {
      return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  
    /**
     * Checks if the current platform is a web browser.
     * @returns {boolean} True if web, false otherwise.
     */
    static isWeb(): boolean {
      return !DeviceUtil.isMobile();
    }
  
    /**
     * Gets the device platform (mobile or web).
     * @returns {string} "mobile" or "web"
     */
    static getPlatform(): string {
      return DeviceUtil.isMobile() ? 'mobile' : 'web';
    }
  }
  