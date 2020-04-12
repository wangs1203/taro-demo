import Taro, { showModal } from '@tarojs/taro';

const Modal = {
  title: '提 示',
  confirmColor: '#3cc51f',
  alert(opt:showModal.Option) {
    return Taro.showModal({
      title: this.title,
      confirmColor: this.confirmColor,
      confirmText: '确 定',
      showCancel: false,
      ...opt
    });
  },
  confirm(opt:showModal.Option) {
    return Taro.showModal({
      title: this.title,
      confirmColor: this.confirmColor,
      cancelColor: '#383838',
      ...opt
    });
  }
};
function TrAlert(opt:showModal.Option) {
  return Modal.alert(opt);
}
function TrConfirm(opt:showModal.Option) {
  return Modal.confirm(opt);
}

export {
  TrAlert,
  TrConfirm
};
