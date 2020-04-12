import Taro, { showToast } from '@tarojs/taro';

const Toast = {
  duration: 1500,
  showMsg(opt:showToast.Option) {
    return Taro.showToast({
      icon: 'none',
      duration: this.duration,
      ...opt
    });
  },
  success(opt:showToast.Option) {
    return Taro.showToast({
      icon: 'success',
      mask: true,
      duration: this.duration,
      ...opt
    });
  }
};

function showMsg(opt:showToast.Option) {
  return Toast.showMsg(opt);
}
function success(opt:showToast.Option) {
  return Toast.success(opt);
}

export {
  showMsg,
  success
};
