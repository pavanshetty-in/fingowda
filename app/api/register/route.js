import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req){
    try{
        const{name, email, password} = await req.json();
//  console.log(name)
//  console.log(email)
//  console.log(password)
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();

        await User.create({name,email,password:hashedPassword});

        return NextResponse.json({message:"Success"},{status: 200});
    }
    catch(error){
        return NextResponse.json({message:"Some unknow Error"},{status:500});
    }
}