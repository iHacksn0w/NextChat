// pages/auth/signin.tsx
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }: { csrfToken: string }) {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        用户名：
        <input name="username" type="text" />
      </label>
      <label>
        密码：
        <input name="password" type="password" />
      </label>
      <button type="submit">登录</button>
    </form>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
