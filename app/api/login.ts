export async function loginUser(email: string, password: string) {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ensures cookies are stored
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || "Something went wrong");

  return data;
}
