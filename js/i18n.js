var I18N = {
  'numberToString': function (num) {
  return ('' + num).split('')
    .map(function (c) { return '0123456789'[c]; }).join('');
  },
  'tileText': function (value) {
    var text = " 于正洋最喜欢的女生是谁";
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value)] || '';
  },
  'won': '实际上你知道的我就不再说了',
  'lose': '想知道是谁就在来一局吧',
}
 