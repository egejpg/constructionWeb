import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Map(); 

export async function POST(request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    const userData = rateLimit.get(ip) || { count: 0, last: now };
    if (now - userData.last < 60_000) {
      userData.count++;
      if (userData.count > 3) {
        return NextResponse.json({ error: "Too many requests" }, { status: 429 });
      }
    } else {
      userData.count = 1;
      userData.last = now;
    }
    rateLimit.set(ip, userData);

    const { name, email, phone, message, website } = await request.json();

    if (website) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    
    
    const data = await resend.emails.send({
      from: 'onay@resend.dev', // Resend'in default domaini
      to: ['egeergul67@gmail.com'],
      reply_to: email, // Gönderen kişinin maili
      subject: 'Yeni İletişim Formu Mesajı - Beykonak İnşaat',
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
