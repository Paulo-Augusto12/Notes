export async function HttpService<T>(url: string, body: any) {
  const route = `http://localhost:3000/api${url}`;
  const response = await fetch(`http://localhost:3000/api${url}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data: T = await response.json();

  return data;
}
