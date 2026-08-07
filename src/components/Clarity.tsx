"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

let clarityInitialized = false;

export default function Clarity() {
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;

    if (!projectId || clarityInitialized) {
      return;
    }

    Clarity.init(projectId);
    clarityInitialized = true;
  }, []);

  return null;
}
