Installation
---
Inside your project folder do:

    npm install --save vue-qr-code


on vue-cli project
---
Import the import file：

    import Vue from 'vue'
    import VueQrCode from 'vue-qr-code'
    Vue.use(VueQrCode);

or, load as needed：

    import QrCode from 'vue-qr-code/QRcode.vue';
    export default {
        components:{
            QrCode
        }
    }

usage
---
    <qr-code val="hello word!"></qr-code>
    
    
result:
---
![image](https://gitee.com/jaibin/image/raw/master/qrcode.png)

Attributes
---
参数 | 类型 | 默认值
---|---|---
val | String | Hello Word!
isObj | Boolean | false
object | Object | {}
