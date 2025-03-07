import { AuthForm } from "./components/auth-form";
import { Logo } from "./components/logo";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
});

export default function Login() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh w-full">
      <section className="bg-[var(--brand-background-light)] min-h-full grid place-items-center px-4">
        <div className="flex flex-col justify-center items-center w-full gap-6">
          {/* Header */}
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <Logo />
            <h3 className={`text-2xl font-semibold ${spaceGrotesk.className}`}>
              Welcome back, Ali Riaz 🙇🏾‍♀️
            </h3>
            <p>Login to access your Uifry account</p>
          </div>
          {/* form */}
          <AuthForm />
        </div>
      </section>
      <section className="hidden lg:block bg-[var(--background)] min-h-full px-4 lg:px-14 lg:py-10 bg-[url(/product-img.png)] bg-[right_bottom_-6rem] bg-no-repeat">
        <div className="flex flex-col w-full gap-6">
          <div className="flex items-center">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  // fill="text-yellow-500"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="size-6 fill-amber-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ))}
          </div>
          <h2 className="text-[var(--brand-text-light)] text-4xl w-full font-bold">
            “I’ve been using Uifry for over a year, and it’s helped simplify all
            my payments.”
          </h2>
          <div className="flex flex-col">
            <h3 className="font-medium text-2xl text-[var(--brand-text)]">
              Ali Riaz
            </h3>
            <h3 className="font-regular text-lg text-[var(--brand-text)]">
              Singapore
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
