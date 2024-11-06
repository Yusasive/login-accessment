
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signup(email: string, password: string) {
  const response = await fetch(`${API_URL}/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
