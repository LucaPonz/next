import { NextUIProvider } from "@nextui-org/system";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <NextUIProvider>
      <main className="max-w-[24rem] mx-auto px-5 flex flex-col items-center justify-center min-h-screen gap-4">
          {children}
      </main>
    </NextUIProvider>
  );
}
