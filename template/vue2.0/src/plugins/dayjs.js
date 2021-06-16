import Vue from "vue";
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
import dayjsPluginUTC from 'dayjs-plugin-utc';
// console.log(dayjs());
dayjs.locale('zh-cn');
dayjs.extend(dayjsPluginUTC, { parseToLocal: true });
Vue.prototype.dayjs = dayjs;
