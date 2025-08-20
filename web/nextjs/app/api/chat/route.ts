import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const client = new OpenAI({
            baseURL: "https://api.hunyuan.cloud.tencent.com/v1",
            apiKey: process.env.HUNYUAN_API_KEY!, // 建议放到 .env 文件里，不要硬编码
        });

        const completion = await client.chat.completions.create({
            model: "hunyuan-lite",
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });

        const content = completion.choices[0].message.content;
        return NextResponse.json({ content });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
