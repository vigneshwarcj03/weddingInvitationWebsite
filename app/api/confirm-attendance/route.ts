import { NextRequest, NextResponse } from 'next/server';

interface AttendanceData {
  name: string;
  email: string;
  phone: string;
  dietary: string;
  guests: number;
  message: string;
  attending: 'yes' | 'no';
}

export async function POST(request: NextRequest) {
  try {
    const data: AttendanceData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.attending) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email via EmailJS or another service
    // 3. Send confirmation email to guest
    // 4. Notify wedding organizers

    console.log('Guest attendance recorded:', {
      name: data.name,
      email: data.email,
      attending: data.attending,
      guests: data.guests,
      dietary: data.dietary,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for confirming your attendance!',
        data: {
          name: data.name,
          attending: data.attending,
          guests: data.guests,
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

// Optional: GET endpoint for health check
export async function GET() {
  return NextResponse.json({ status: 'API is running' });
}

