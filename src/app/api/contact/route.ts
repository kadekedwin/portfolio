import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const filePath = path.join(process.cwd(), 'messages.json');

        let messages = [];

        // Check if file exists and read existing messages
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            if (fileContent) {
                try {
                    messages = JSON.parse(fileContent);
                } catch (e) {
                    // If file is corrupted, start fresh
                    messages = [];
                }
            }
        }

        // Add timestamp to new message
        const newMessage = {
            ...data,
            timestamp: new Date().toISOString(),
        };

        messages.push(newMessage);

        // Write back to file
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

        return NextResponse.json({ success: true, message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to save message' },
            { status: 500 }
        );
    }
}
