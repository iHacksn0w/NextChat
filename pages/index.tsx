// pages/index.tsx
import { getSession, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>未登录</p>
        <button onClick={() => signIn()}>登录</button>
      </div>
    );
  }

  return (
    <div>
      <p>欢迎，{session.user?.name}！</p>
      <button onClick={() => signOut()}>退出登录</button>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
