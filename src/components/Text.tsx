import React from "react";

type TextProps = {
  children: string;
  loading?: boolean;
  coverContent?: boolean;
};
type LoadingProps = { coverContent?: boolean };

function Loading(props: LoadingProps) {
  const hasTextOnly = Boolean(props.coverContent) ? "text-only" : "";

  return (
    <span className={`loading ${hasTextOnly}`}>
      <div className="loading-item" />
      <div className="loading-item" />
      <div className="loading-item" />
    </span>
  );
}

const defaultTextProps: TextProps = {
  coverContent: true,
  loading: false,
  children: "",
};

function Text(props: TextProps = defaultTextProps) {
  if (props.loading) return <Loading coverContent={props.coverContent} />;
  return <p {...props}>{props.children}</p>;
}

export default Text;
