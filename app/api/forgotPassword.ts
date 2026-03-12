const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function forgotPassword(email: string) {
  const response = await fetch(`${backendUrl}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
