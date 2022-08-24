import React from "react";

function Link({ href, children }: { href: string; children: string }) {
  return <a href={href}>{children}</a>;
}

export default Link;
