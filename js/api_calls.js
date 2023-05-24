export async function get({ endpoint = "", id = "" }) {
  try {
    const response = await fetch(`http://35.193.13.121:8443/${endpoint}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function post(endpoint, data = {}) {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const body = JSON.stringify(data);

    const response = await fetch(`http://35.193.13.121:8443/${endpoint}`, {
      method: "POST",
      headers,
      body,
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}
