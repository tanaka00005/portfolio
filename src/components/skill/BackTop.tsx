import React from "react";
import { useRouter } from "next/router";

function BackTop() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.back();
        }}
      >
        戻る
      </button>
    </div>
  );
}

export default BackTop;
