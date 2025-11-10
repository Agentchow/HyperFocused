import React from "react";

export default function Section({
  children,
  bgClass = "",
  className = "",
  noTop = false,
  noBottom = false,
  ...props
}) {
  // Add small top padding in noTop mode to prevent margin-collapsing
  // and slightly increase default top padding site-wide.
  const paddingClass =
    noTop && noBottom
      ? "py-0"
      : noTop
      ? "py-20 md:py-36"
      : noBottom
      ? "py-20 md:py-36"
      : "py-20 md:py-36";

  return <section {...props} className={`${bgClass} ${paddingClass} ${className}`}>{children}</section>;
}


