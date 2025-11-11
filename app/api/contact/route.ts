import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * Handles form submissions and sends email notifications
 */

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate?: string;
  appointmentType?: string;
  message?: string;
  newPatient?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !body[field as keyof ContactFormData]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailSubject = `New Appointment Request from ${body.firstName} ${body.lastName}`;
    const emailBody = `
New appointment request received:

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone}
${body.preferredDate ? `Preferred Date: ${body.preferredDate}` : ''}
${body.appointmentType ? `Appointment Type: ${body.appointmentType}` : ''}
${body.newPatient ? 'New Patient: Yes' : 'New Patient: No'}
${body.message ? `\nMessage:\n${body.message}` : ''}

---
This email was sent from the EyeCare Center OC website contact form.
    `.trim();

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, we'll log the submission and return success
    // In production, replace this with actual email sending:
    
    // Example with environment variable:
    // const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
    // const emailServiceKey = process.env.EMAIL_SERVICE_API_KEY;
    // const recipientEmail = process.env.CONTACT_EMAIL || 'eyecarecenteroc@gmail.com';
    
    // await fetch(emailServiceUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${emailServiceKey}`,
    //   },
    //   body: JSON.stringify({
    //     to: recipientEmail,
    //     subject: emailSubject,
    //     text: emailBody,
    //   }),
    // });

    // Log submission (remove in production or use proper logging service)
    console.log('Contact form submission:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      phone: body.phone,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your request. We will contact you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'An error occurred while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

