/**
 * html5 文件上传
 *
 * @param {Object} file 文件对象 {name: 上传字段名, filename: 保存后台文件名, content: base64 内容}
 * @param {Object} options 参数对象 {action: 上传后台URL, onxxx: 事件回调}
 */
export default (file, options) => {
  let formData = new FormData()
  formData.append(file.name, dataURItoBlob(file.content), file.filename)
  return sendfile(formData, file, options)
}

const sendfile = (formData, file, options={}) => {
  return new Promise((resolve, reject) => {
    //创建xhr对象
    var xhr = new XMLHttpRequest();

    //监听文件上传进度
    xhr.upload.onprogress = (evt) => {
      //lengthComputabel: 文件长度是否可计算
      if(evt.lengthComputable){
        //evt.loaded: 已下载的字节数
        //evt.total: 文件总字节数
        var percent = Math.round(evt.loaded*100/evt.total);
        if (options.onprogress) options.onprogress(percent, file)
      }
    }
    
    //监听文件传输开始    
    xhr.onloadstart = (event) => {
      options.onloadstart && options.onloadstart({event, file, type: 'loadstart'})
    }
    
    //监听ajax成功完成事件
    xhr.onload = (event) => {
      resolve({event, response: event.target.response, file, type: 'success'})
    }
    
    //监听ajax错误事件    
    xhr.onerror = function(event){
      reject({event, error: event.target.response, file, type: 'error'})
    }
    
    //监听ajax被中止事件
    xhr.onabort = function(event){
      reject({event, file, type: 'abort'})
    }
    
    //监听传输结束事件: 不管成功或者失败都会触发
    // xhr.onloaded = function(evt){
    //   options.onloaded && options.onloaded(evt, file)
    // }   
      
    //*发起ajax请求数据
    xhr.open('POST', options.action, true);
    xhr.send(formData);
  })
}

/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 *            用url方式表示的base64图片数据
 */
function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // mime类型
  var byteString = atob(dataURI.split(',')[1]); //base64 解码
  var arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
  var intArray = new Uint8Array(arrayBuffer); //创建视图

  for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
  }
  return new Blob([intArray], {type: mimeString});
}

/**
 * 
 * blob二进制 to base64
 **/
function blobToDataURI(blob, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
      callback(e.target.result);
  }
  reader.readAsDataURL(blob);
}