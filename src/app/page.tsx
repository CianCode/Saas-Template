import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold underline">
        Welcome to the Saas Template!
      </h1>
      <p className="mt-4">
        This template uses Next.js, Shadcn/ui, Postgresql, Drizzle, Stripe,
        BetterAuth, and Tailwind CSS.
      </p>
    </div>
  );
}
