import { getDb } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET - Fetch user's votes by device ID
export async function GET(request: NextRequest) {
  try {
    const sql = getDb()
    if (!sql) {
      // Database not configured — return empty user votes
      return NextResponse.json({})
    }
    const deviceId = request.nextUrl.searchParams.get('deviceId')
    
    if (!deviceId) {
      return NextResponse.json({ error: 'Device ID required' }, { status: 400 })
    }
    
    const result = await sql`
      SELECT product_id, vote_type FROM product_votes WHERE device_id = ${deviceId}
    `
    
    const userVotes: Record<number, string> = {}
    for (const row of result) {
      userVotes[row.product_id] = row.vote_type
    }
    
    return NextResponse.json(userVotes)
  } catch (error) {
    console.error('Error fetching user votes:', error)
    return NextResponse.json({ error: 'Failed to fetch user votes' }, { status: 500 })
  }
}
