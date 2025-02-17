// import { http, HttpResponse } from "msw";

// export const handlers = [
//   http.get("pathexample", () => {
//     return HttpResponse.json([]);
//   }),
// ];

import { http, HttpResponse } from "msw";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;

// Mock handler for the Supabase sign-in request
export const handlers = [
  http.post(`https://${url}/auth/v1/token`, async ({ request }) => {
    // Use request.formData() to access the form data from the request
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simple mock validation (you can modify this as needed)
    if (!email || !password) {
      return HttpResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Simulate a successful login response if email contains "test" and password is at least 8 chars long
    if (email.includes("test") && password.length >= 8) {
      return HttpResponse.json(
        { access_token: "dummyAccessToken", user: { email } },
        { status: 200 }
      );
    }

    // Simulate an error response for invalid credentials
    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }),
];
