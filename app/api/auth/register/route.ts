import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
// import { sql } from '@vercel/postgres'

export  async function POST(request: Request) {
    try {
        const { fullname, email, password } = await request.json();

        //Vailidate email and Password here

        console.log({fullname, email, password});
        const hashedPassword = await hash(password, 10);

        // const response = await sql ' 
        //  INSERT INTO users (fullname, email , password)
        //  VALUES (${email}, ${hashedPassword})
        // '
        
    } catch (e) {
        console.log(e);   
    }
    return NextResponse.json({ message: "success" })
}