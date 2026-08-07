"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

let clarityInitialized = false;

export default function Clarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (!projectId || clarityInitialized) {
      return;
    }

    clarity.init(projectId);
    clarityInitialized = true;
  }, []);

  return null;
}
