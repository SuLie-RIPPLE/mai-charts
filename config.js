// 配置文件 - 修改为自己的COS地址
const CONFIG = {
    // COS 存储桶地址
    // 示例: 'https://maid-charts-125xxxx.cos.ap-guangzhou.myqcloud.com'
    downloadBaseUrl: '', // 留空则使用本地相对路径
    
    // 是否使用COS
    useCOS: false
};

// 获取下载链接
function getDownloadUrl(filename) {
    if (CONFIG.useCOS && CONFIG.downloadBaseUrl) {
        return CONFIG.downloadBaseUrl + '/charts/' + encodeURIComponent(filename);
    }
    return 'charts/' + encodeURIComponent(filename);
}
