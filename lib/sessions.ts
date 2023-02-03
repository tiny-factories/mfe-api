import { getServerSession } from "next-auth/next";

import { authOptions } from "./auth";
// import prisma from "./prisma";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  // const userProfileData = await prisma.user.findMany({});
  // Add filter here by seeson email

  return session?.user;
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const userProfileData = await prisma.user.findMany({
// 	  filter bu email form session
//   });
//   return {
// 	props: { feed: makeSerializable(userProfileData) },
//   };
// };
