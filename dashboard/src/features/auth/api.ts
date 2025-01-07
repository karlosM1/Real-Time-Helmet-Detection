import {
  OAuthProvider,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

import { auth } from "@/lib/firebaseConfig";
import { AuthUser } from "./types";

export const getAuthUser = async (): Promise<AuthUser | null> => {
  try {
    const attributes = (await new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    })) as User | null;

    if (!attributes?.email) {
      return null;
    }

    const user = {
      email: attributes.email,
      password: "",
      uid: attributes.uid,
      apiToken: "",
    } satisfies AuthUser;

    return user;
  } catch (error) {
    console.log(error);
  }

  return null;
};
