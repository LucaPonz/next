import AppTopBar from "@/src/components/AppTopBar";
import { NextUIProvider } from "@nextui-org/system";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <NextUIProvider>
      <AppTopBar isDashboard={false}/>
      {children}
    </NextUIProvider>
  );
}
