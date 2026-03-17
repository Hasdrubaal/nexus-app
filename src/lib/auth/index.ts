import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getDb } from "@/lib/db";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _auth: any;

function getAuth() {
  if (!_auth) {
    _auth = NextAuth({
      adapter: DrizzleAdapter(getDb()),
      providers: [],
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: "/login",
      },
    });
  }
  return _auth;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handlers = {
  GET: (...args: any[]) => getAuth().handlers.GET(...args),
  POST: (...args: any[]) => getAuth().handlers.POST(...args),
};
export const auth = (...args: any[]) => getAuth().auth(...args);
export const signIn = (...args: any[]) => getAuth().signIn(...args);
export const signOut = (...args: any[]) => getAuth().signOut(...args);
