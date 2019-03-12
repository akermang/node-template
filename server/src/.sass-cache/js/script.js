function call(url) {
    return fetch(url);
}

let img = document.createElement('img');

const promise = call('https://cdn.pixabay.com/photo/2015/04/20/13/10/rock-731140_960_720.jpg')

promise.then(res => {
    res.arrayBuffer().then(buffer => {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(buffer);
    
        img.src = base64Flag + imageStr;    
        document.body.appendChild(img);
    })
}).catch(err => console.log('error: ', err))

 function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
  
    bytes.forEach((b) => binary += String.fromCharCode(b));
  
    return window.btoa(binary);
  };

  const helloServerPromise = call("http://localhost:3000/internal")