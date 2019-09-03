import { reqPost } from "./servers";
import { loginStatusURL } from "./config";
export const loginStatus = (data?:any) => {
  return reqPost(
    loginStatusURL,
    data
  )
}
