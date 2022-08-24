import React from "react";
import Text from "./Text";

function Button({
  children,
  loading,
}: {
  children: string;
  loading?: boolean;
}) {
  return (
    <button
      aria-label={loading ? "loading" : undefined}
      className={loading ? "loading-button" : undefined}
    >
      <Text loading={loading} coverContent={false}>
        {children}
      </Text>
    </button>
  );
}

export default Button;
