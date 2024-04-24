"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <span className="flex flex-row gap-2">
        <MoveLeft /> Back
      </span>
    </button>
  );
};

export default BackButton;
