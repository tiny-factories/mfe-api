import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type UserProps = {
  id: number;
  name: string;
  username: string;
};

const User: React.FC<{ data: UserProps }> = ({ data }) => {
  return (
    <div>
      <h2>{data.id}</h2>
      <small>{data.username}</small>
    </div>
  );
};

export default User;
