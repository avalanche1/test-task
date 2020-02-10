/* eslint-env node */
/* eslint-disable no-console */
// const isNode = typeof process === "object" ? true : false;
// // todo: get rid of this err
// const fetch = isNode ? require("node-fetch") : window.fetch;

export const REST = {get_json, post_json, delete_json};
export const statusCodes = {OK: 200, OK_NO_CONTENT: 204, ERR_NOT_FOUND: 404};

type TGetJSON = TDeleteJSON;
function get_json<T>({url, authToken, printResponse, useProxy}: TGetJSON): Promise<T> {
  return send_http_request({
    url,
    method: "GET",
    authToken,
    printResponse,
    useProxy,
  });
}

type TPostJSON = TDeleteJSON & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Record<string, any>;
};
function post_json<T>({
  url,
  payload,
  authToken,
  printResponse,
  useProxy,
}: TPostJSON): Promise<T> {
  return send_http_request({
    url,
    method: "POST",
    authToken,
    contentType: "application/json",
    payload,
    printResponse,
    useProxy,
  });
}

function delete_json<T>({
  url,
  authToken,
  printResponse,
  useProxy,
}: TDeleteJSON): Promise<T> {
  return send_http_request({
    url,
    method: "DELETE",
    authToken,
    printResponse,
    useProxy,
  });
}
type TDeleteJSON = {
  url: string;
  authToken?: string;
  printResponse?: boolean;
  useProxy?: true;
};

async function send_http_request<T>({
  url,
  method,
  authToken,
  contentType,
  payload,
  printResponse,
  useProxy,
}: TRestRequest): Promise<T> {
  // TODO!!
  // WARNING! useProxy is a Dev-only option! Relies on "CORS-Anywhere"..
  // In production cross-origin requests done to origins that do..
  // not allow cross-origins should be made from the server; then fed to the entry.
  // https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
  const corsBypassProxy = "https://cors-anywhere.herokuapp.com/",
    finalURL = useProxy ? `${corsBypassProxy}${url}` : url;

  type THeaders = {Accept: string; ["Content-Type"]?: string; Authorization?: string};
  const headers: THeaders = {
    Accept: contentType,
  } as const;

  /* eslint-disable no-unused-expressions,fp/no-mutation */
  authToken ? (headers.Authorization = authToken) : null;
  contentType ? (headers["Content-Type"] = contentType) : null;
  /* eslint-enable no-unused-expressions,fp/no-mutation */

  const request = {
    method,
    // mode: "no-cors",
    headers,
  } as const;

  const body = payload ? JSON.stringify(payload) : false;
  const requestWithBody = Object.assign({}, request, {body});

  const response = payload
    ? await fetch(finalURL, requestWithBody)
    : await fetch(finalURL, request);

  // Use immediatelly invoked fn here to set const result through branching conditions
  // response.json() returns a Promise - thus the 'await' for it to resolve.
  const result = await (() => {
    // prettier-ignore
    return (
      // eslint-disable-next-line no-negated-condition
      response.status !== statusCodes.OK    ? response.json()
      : contentType === "application/json"  ? response.json()
                                            : "need to parse xml"
    );
  })();

  if (printResponse) {
    console.log(`${method} status: ${response.status}`);
    const tabs = 2;
    console.log(JSON.stringify(result, null, tabs));
  }
  return result;
}
type TRestRequest = TPostJSON & {
  method: "GET" | "POST" | "DELETE";
  contentType?: "application/json" | "application/xml";
};
