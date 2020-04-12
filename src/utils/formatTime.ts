/**
 * 不足10补0
 */
function formatNumber(n: string | number) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

/**
 * 得出时间字符串
 * @param {Date} date
 * @param {Array} format
 * @param {String} type
 * @return {string}
 */
function formatTime(
  date: Date,
  format: string[] = ['/', ':'],
  type: 'datetime' | 'date' | 'time' = 'datetime'
) :string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join(format[0]);
  const t2 = [hour, minute, second].map(formatNumber).join(format[1]);
  if (type === 'datetime') {
    return `${t1} ${t2}`;
  }
  if (type === 'date') {
    return `${t1}`;
  }
  if (type === 'time') {
    return `${t2}`;
  }
  return '';
}


function dateFormat(fmt: string, date: Date): string {
  let ret;
  let result = fmt;
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日s
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    if (opt.hasOwnProperty(k)) {
      ret = new RegExp(`(${k})`).exec(result);
      if (ret) {
        result = result.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
        );
      }
    }
  }
  return result;
}
// 计算星期
const computeWeek = (val: string): string => {
  const weekZH = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
  };
  // new Date(val.slice(0,10)).getDay();
  const localTime = new Date(val.slice(0, 10)).getTime();
  const localOffset = new Date(val.slice(0, 10)).getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  const offset = 8;
  const korean = utc + 3600000 * offset;
  const day = weekZH[new Date(korean).getDay()];
  return `周${day}`;
};

// 截取时间
const splitDate = (val: string, f: number, t?: number): string => {
  if (t) return val.slice(f, t);
  return val.slice(f);
};
export {
  formatTime, computeWeek, splitDate, dateFormat
};
