import FowQrCode from './QRcode';

/* istanbul ignore next */
FowQrCode.install = function(Vue) {
  Vue.component(FowQrCode.name, FowQrCode);
};

export default FowQrCode;