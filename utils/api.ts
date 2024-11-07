
export async function registerUser(email: string, password: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to register");
  }

  return data;
}

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      return { error: true, message: errorData.detail || "Login failed" };
    }
  
    return await response.json(); 
  }
  