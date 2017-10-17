<template>
    <img :src="codeUrl" alt="浏览器不支持" class="qrcode">
</template>
<script>
import QRCode from 'qrcode'
export default {
    name: 'QrCode',
    props: {
        val: {
            type: String,
            default: 'Hello Word!'
        },
        object: {
            type: Object,
            default:{}
        },
        isObj: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        codeUrl() {
            let codeUrl;
            let str = JSON.stringify(this.order)
            QRCode.toDataURL(this.isObj ? String(str) : this.val, { errorCorrectionLevel: 'H' }, (err, url) => {
                codeUrl = url;
            })
            return codeUrl
        }
    }
}
</script>
<style lang="less" scoped>

</style>
