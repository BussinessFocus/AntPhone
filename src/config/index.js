
/* 甘雨：192.168.2.92:8098   单世鹏：192.168.2.91:8098  李晓峰：192.168.2.93  */
let GY_baseUrl = ""; //甘雨地址
let SSP_baseUrl = ""; //单世鹏地址
let LXF_baseUrl = ""; //李向峰地址
let WXLOGIN = "";//微信获取code的跳转地址

//开发环境配置
if (process.env.NODE_ENV === "development") {
    GY_baseUrl = 'http://192.168.2.92:8098/'
    SSP_baseUrl = 'http://192.168.2.91:8098/'
    // SSP_baseUrl = 'http://39.104.135.186:8098/'
    LXF_baseUrl = 'http://192.168.2.93:8098/'
    GY_baseUrl= SSP_baseUrl
    LXF_baseUrl = SSP_baseUrl
    WXLOGIN = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcdfb3af7e8536364&redirect_uri=http://aztest.sino-med.net&response_type=code&scope=snsapi_base"
}
//测试环境地址
if (process.env.NODE_ENV === "test") {
    GY_baseUrl = LXF_baseUrl= SSP_baseUrl='https://aztest.sino-med.net:8098/';
    WXLOGIN = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcdfb3af7e8536364&redirect_uri=https://aztest.sino-med.net&response_type=code&scope=snsapi_base"
}
//正式环境地址
if (process.env.NODE_ENV === "production") {
    GY_baseUrl = LXF_baseUrl= SSP_baseUrl = 'https://az.sino-med.net:8098/';
    WXLOGIN = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx22139621f658c0e6&redirect_uri=https://az.sino-med.net&response_type=code&scope=snsapi_base"
}
//三级等保正式环境地址
// if (process.env.NODE_ENV === "production") {
//     GY_baseUrl = LXF_baseUrl= SSP_baseUrl = 'https://www.medcare.net.cn:8443/wenzhen/'
//     // WXLOGIN = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx22139621f658c0e6&redirect_uri=https://www.medcare.net.cn/wenzhen&response_type=code&scope=snsapi_base"
// }
console.log(process.env.NODE_ENV);

export default {
    GY_baseUrl,
    SSP_baseUrl,
    LXF_baseUrl,
    WXLOGIN
}