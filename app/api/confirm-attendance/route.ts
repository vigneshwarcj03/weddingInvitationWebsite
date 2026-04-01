import { NextRequest, NextResponse } from 'next/server';

interface AttendanceData {
  name: string;
  email: string;
  phone: string;
  dietary?: string;
  guests?: number;
  message?: string;
  attending: 'yes' | 'no';
  emoji?: string;
}

// Function to escape Telegram Markdown
function escapeMarkdown(text: string) {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/g, '\\$1');
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 400 }
      );
    }

    const data: AttendanceData = await request.json();

    // Validate required fields
    if (!data.name?.trim() || !data.email?.trim() || !data.phone?.trim() || !data.attending?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, attending' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check Telegram env variables
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const message = `🎉 *New RSVP Received!*\n\n` +
        `👤 *Name:* ${escapeMarkdown(data.name)}\n` +
        `📧 *Email:* ${escapeMarkdown(data.email)}\n` +
        `📱 *Phone:* ${escapeMarkdown(data.phone)}\n` +
        `✅ *Attending:* ${escapeMarkdown(data.attending)}\n` +
        `👥 *Additional Guests:* ${data.guests ?? 0}\n` +
        `🍽️ *Dietary Restrictions:* ${escapeMarkdown(data.dietary || 'None')}\n` +
        `💬 *Message:* ${escapeMarkdown(data.message || 'No message')}\n` +
        `${data.emoji ? `😊 *Emoji:* ${escapeMarkdown(data.emoji)}` : ''}`;

      try {
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: message,
              parse_mode: "MarkdownV2", // Use MarkdownV2 and escape text
            }),
          }
        );

        if (!telegramResponse.ok) {
          console.error('Failed to send Telegram message:', await telegramResponse.text());
        }
      } catch (telegramError) {
        console.error('Error sending Telegram notification:', telegramError);
      }
    } else {
      console.warn('Telegram env variables missing. Skipping notification.');
    }

    console.log('Guest attendance recorded:', data);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for confirming your attendance!',
        data: {
          name: data.name,
          attending: data.attending,
          guests: data.guests ?? 0,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing attendance:', error);
    return NextResponse.json(
      { error: 'Failed to process attendance confirmation' },
      { status: 500 }
    );
  }
}