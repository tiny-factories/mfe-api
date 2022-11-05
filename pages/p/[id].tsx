import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import { makeSerializable } from "../../lib/util";
import prisma from "../../lib/prisma";

async function publish(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function destroy(id: String): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/");
}

const Post: React.FC<PostProps> = (props) => {
  let measurement = props.measurement;
  if (!props.published) {
    measurement = `${measurement} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{measurement}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown children={props.content} />
        {!props.published && (
          <button onClick={() => publish(props.id)}>Publish</button>
        )}
        {/* <button onClick={() => destroy(props.id)}>Delete</button> */}
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = String(
    Array.isArray(context.params.id) ? context.params.id[0] : context.params.id
  );
  const post = await prisma.data.findUnique({
    where: { id },
    include: { author: true },
  });
  return { props: { ...makeSerializable(post) } };
};

export default Post;
