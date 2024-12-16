import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Twitter from "next-auth/providers/twitter"

import type { NextAuthConfig } from "next-auth"
 
export default { providers: [Google, Facebook, Twitter] } satisfies NextAuthConfig