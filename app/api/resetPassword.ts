const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function resetPassword(password: string, token: string) {
  const response = await fetch(`${backendUrl}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
