var num_array = ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
var num_big = ['', '拾', '佰', '仟', '万'];
var num_small = ['', '角', '分'];
function fun_change(obj, len) {
  var ch_num = '';
  for (var i = 0; i < obj.length; i++) {
    if (obj[i] == 0) {
      var ch_num = ch_num + '零'
      continue;
    }
    var ch_num = ch_num + num_array[obj[i]] + num_big[len - i - 1]
  }
  return ch_num;
}
function change_num(num_obj) {
  var num_obj=String(num_obj);
  //console.log('传入的值为'+num_obj);
  //console.log(typeof(num_obj));
  var len = num_obj.length;
  if (len <= 5 && len >= 1) {
    var res = fun_change(num_obj, len)
  } else {
    return '正在开发';
  }
  //console.log(res + '元');
  return res+'元'
}
module.exports = {
  fun_change: fun_change,
  change_num: change_num,
}