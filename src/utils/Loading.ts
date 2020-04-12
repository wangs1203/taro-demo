import Taro from '@tarojs/taro';

/**
 * 整合封装微信的原生弹窗
 * 提示、加载、工具类
 */
export default class Loading {
  static isLoading = false;

  /**
   * 加载提示弹窗
   */
  static show(title = '加载中', force = false) {
    if (this.isLoading && !force) {
      return;
    }
    this.isLoading = true;
    if (Taro.showLoading) {
      Taro.showLoading({
        title,
        mask: true
      });
    } else {
      Taro.showNavigationBarLoading(); // 导航条加载动画
    }
  }

  /**
   * 加载完成
   */
  static hide() {
    let duration = 0;
    if (this.isLoading) {
      this.isLoading = false;
      if (Taro.hideLoading) {
        Taro.hideLoading();
      } else {
        Taro.hideNavigationBarLoading(); // 导航条加载动画
      }
      duration = 500;
    }
    // 设定隐藏的动画时长为500ms,防止直接toast时出现问题
    return new Promise((resolve) => setTimeout(resolve, duration));
  }
}
