export async function HttpService<T = any>(url: string, config?: RequestInit) {
  const route = `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
  const response = await fetch(route, {...config, cache: 'no-cache'});

  if (!response.ok) {
    console.log(response.statusText)
    throw new Error(response.statusText);
  }
  const data: T = await response.json();

  return data;
}
