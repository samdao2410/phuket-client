import axios, { AxiosResponse, CancelToken } from 'axios'

/**
 * @template T
 * @param {AxiosResponse<T>} response
 * @param {boolean} isRawResponse
 * @return {T}
 */
function processResponse<T>(response: AxiosResponse<T>, isRawResponse: boolean): T {
  if (isRawResponse || response.data === undefined) return response as any as T
  return response?.data
}

const requests = {
  get: async <T>(url: string, header = false, requestToken?: CancelToken, isRawResponse = false) => {
    const headers = header
      ? {
        Pragma: 'no-cache',
      }
      : undefined
    const response = await axios.request<T>({
      method: 'get',
      url: `${url}`,
      cancelToken: requestToken,
      headers: headers,
    })
    return processResponse<T>(response, isRawResponse)
  },

  post: async <T>(url: string, body: any, header = false, requestToken?: CancelToken) => {
    if (header) {
      const response = await axios.request<T>({
        method: 'post',
        url: `${url}`,
        cancelToken: requestToken,
        headers: {
        },
        data: body,
      })
      return response?.data
    }
    const response = await axios.request<T>({
      method: 'post',
      url: `${url}`,
      cancelToken: requestToken,
      data: body,
    })
    return response?.data
  },

  delete: async <T>(url: string, header = false) => {
    if (header) {
      const response = await axios.request<T>({
        method: 'delete',
        url: `${url}`,
        headers: {
        },
      })
      return response?.data
    }
    const response = await axios.request<T>({
      method: 'delete',
      url: `${url}`,
    })
    return response?.data
  },

  put: async <T>(url: string, body: any, header = false) => {
    if (header) {
      const response = await axios.request<T>({
        method: 'put',
        url: `${url}`,
        headers: {
        },
        data: body,
      })
      return response?.data
    }
    if (body) {
      const response = await axios.request<T>({
        method: 'put',
        url: `${url}`,
        data: body,
      })
      return response?.data
    }
    const response = await axios.request<T>({
      method: 'put',
      url: `${url}`,
    })
    return response?.data
  },
}


export default requests;
