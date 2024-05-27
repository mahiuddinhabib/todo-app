export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://todo-app-backend-swart.vercel.app/api/v1"
    // "http://localhost:5000/api/v1"
  );
};
