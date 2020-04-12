import Request from 'services/http';
import { demoURL } from 'services/api';

// 获取航班动态列表
export const getDemo = () => Request.get({ url: demoURL });
