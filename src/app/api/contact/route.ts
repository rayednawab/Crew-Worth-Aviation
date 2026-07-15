import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Send Email Notification via Resend
    // We do this in a try-catch block so that if email fails, it doesn't break the Sheets integration
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Crew Worth Aviation <onboarding@resend.dev>', // Use resend test domain or your verified domain
          to: process.env.DESTINATION_EMAIL || 'info@crewworthaviation.com',
          subject: `New Inquiry from ${name}`,
          text: `
            New contact form submission:
            
            Name: ${name}
            Email: ${email}
            
            Message/Parts Request:
            ${message}
          `,
        });
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We don't return an error here; we still want to save to Google Sheets!
    }

    // 2. Save to Google Sheets
    try {
      if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        // Authenticate with Google
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            // Handle escaped newline characters in the private key environment variable
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append the data to the spreadsheet
        // Assuming your sheet is named "Sheet1" and has columns: Timestamp | Name | Email | Message
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEET_ID,
          range: 'Sheet1!A:D', // Change 'Sheet1' to your actual sheet tab name if different
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [
                new Date().toISOString(), // Timestamp
                name,
                email,
                message,
              ],
            ],
          },
        });
      } else {
        console.warn("Google Sheets credentials missing in .env. Skipping Sheets integration.");
      }
    } catch (sheetsError) {
      console.error('Google Sheets append failed:', sheetsError);
      return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Server error processing contact form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
