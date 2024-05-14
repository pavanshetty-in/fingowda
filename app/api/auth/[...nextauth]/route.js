import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";




export const authOptions ={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {email, password} = credentials;
               
                try {
                    console.log("login at nextauth");
                    console.log(email, password);
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if(!user){
                        return null;
                    }
                     const passmatch = await bcrypt.compare(password,user.password);

                     if(!passmatch){
                        return null;
                     }
                     console.log("success",user);
                     return user;
                } catch (error) {
                    console.error(error);
                }
            }
        })
    ],
    session:{
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/",
    },
};
const handler = NextAuth(authOptions);

export{ handler as GET, handler as POST };