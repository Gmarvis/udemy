const Headers = {
  "Content-Type": "application/json",
};

export default class ApiCall {
  GET(url: string, _headers: HeadersInit = {}) {
    return fetch(url, {
      method: "GET",
      headers: { ...Headers, ..._headers },
    });
  }

  POST(url: string, body: any, _headers: HeadersInit = {}) {
    return fetch(url, {
      method: "POST",
      headers: { ...Headers, ..._headers },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
}
