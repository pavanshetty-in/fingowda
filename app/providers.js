"use client";

import {SessionProvider} from "next-auth/react"
import { Children } from "react";

export const AuthProvider = ({Children}) => {
    return <SessionProvider>{Children}</SessionProvider>
};
