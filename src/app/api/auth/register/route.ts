import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email, password, role = 'user' } = await req.json();

    const { data, error } = await supabase.from('users').insert([{ email, password, role }]).select();

    if (error || !data || data.length === 0) {
      return NextResponse.json({ success: false, message: error?.message || 'User creation failed' }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: data[0] });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
