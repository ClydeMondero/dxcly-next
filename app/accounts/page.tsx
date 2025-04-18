import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return <div>Hello {user?.username}</div>;
};

export default Page;
