export async function HttpService<T>(url: string, config?: RequestInit) {
  const route = `${process.env.API_BASE_URL}${url}`;
  const response = await fetch(route, config);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: T = await response.json();

  return data;
}
