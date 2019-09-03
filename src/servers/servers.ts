import HTTPREQUEST from "./http";

export const reqPost = (
  url: string,
  reqDatas?: any,
  contentType?: string
) => {
  return HTTPREQUEST.post(url, reqDatas, contentType);
}
