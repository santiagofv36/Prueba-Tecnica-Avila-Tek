"use client";

import { NextUIProvider } from "@nextui-org/react";

// Esto se utiliza para que NextUI se pueda utilizar en toda la aplicacion en especifico que los Toast se pueda utilizar en cualquier parte de la aplicacion

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
