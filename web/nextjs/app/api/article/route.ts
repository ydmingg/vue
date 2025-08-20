import { NextResponse } from "next/server";
import { createArticle } from "./service";

// GET请求
export async function GET() {
    return NextResponse.json({ title: "aaa", content: "bbbbbbbb" });
}

// POST请求
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const article = createArticle(body);
        return NextResponse.json(article, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: "请求体格式错误" }, { status: 400 });
    }
}

// PUT请求
export async function PUT() {
    return NextResponse.json({ msg: "PUT 请求" });
}

// DELETE请求
export async function DELETE() {
    return NextResponse.json({ msg: "DELETE 请求" });
}
