export function formatDate (timestamp, pattern) {
  var tmp = new Date(Number(timestamp))
  var o = {
    'M+': tmp.getMonth() + 1, // month
    'd+': tmp.getDate(), // day
    'h+': tmp.getHours(), // hour
    'm+': tmp.getMinutes(), // minute
    's+': tmp.getSeconds(), // second
    'q+': Math.floor((tmp.getMonth() + 3) / 3), // quarter
    'S': tmp.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (tmp.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(pattern)) {
      pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return pattern
}

export function objectArraySort (array, keyName, type) {
  function objectArraySortFn () {
    return function (objectN, objectM) {
      var valueN = objectN[keyName]
      var valueM = objectM[keyName]
      if (!type || (type && type === 'down')) {
        if (valueN < valueM) return 1
        else if (valueN > valueM) return -1
        else return 0
      } else {
        if (valueN > valueM) return 1
        else if (valueN < valueM) return -1
        else return 0
      }
    }
  }
  if (array) {
    array.sort(objectArraySortFn(keyName))
  }
  return array
}
