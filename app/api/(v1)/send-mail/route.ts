import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { emailBody } from "../zod/email-body";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req : NextRequest){

    const body = await req.json();
    const userDetails = emailBody.safeParse(body);

    if(userDetails.success === true){
        const { name , email , subject, message } = userDetails.data;

        try{
            const { data, error } = await resend.emails.send({
                from: 'Pankeet Portfolio <onboarding@resend.dev>',
                to: ['pankeet04@gmail.com'],
                replyTo: email,
                subject: subject,
                text: `
                Name: ${name}
                Email: ${email}

                Message:
                ${message}
                `,
            });
            if(error)  return Response.json({ error }, { status: 500 });
            return NextResponse.json(data,{status:200});
        }catch(err){
            console.error(err);
            return NextResponse.json({
                message : "Cannot send email !"
            },{status:500})
        }
    }
    else{
        return NextResponse.json({
            message : "Invalid Semantics"
        },{status:400})
    }
}