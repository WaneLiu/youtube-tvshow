const superagent = require('superagent');



function get_pic(url) {
  superagent.get(url).end((err,res) => {
    if (err) console.log('error');
    else {
      //console.log(Object.keys(res['res']['text']['0']));
      var arr = JSON.parse(res['res']['text'])['data']['rl'];
      console.log(arr[0])
      for( let i = 0; i < arr.length; i ++) {
        console.log(arr[i].rs1)
      }
    }
  })
}
//循环url
get_pic('https://www.douyu.com/gapi/rkc/directory/2_201/1')
