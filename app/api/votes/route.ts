import { getDb } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// GET - Fetch all vote counts
export async function GET() {
  try {
    const sql = getDb()
    const result = await sql`
      SELECT product_id, likes, dislikes FROM product_vote_counts ORDER BY product_id
    `
    
    const voteCounts: Record<number, { likes: number; dislikes: number }> = {}
    for (const row of result) {
      voteCounts[row.product_id] = {
        likes: row.likes,
        dislikes: row.dislikes,
      }
    }
    
    return NextResponse.json(voteCounts)
  } catch (error) {
    console.error('Error fetching vote counts:', error)
    return NextResponse.json({ error: 'Failed to fetch votes' }, { status: 500 })
  }
}

// POST - Submit a vote
export async function POST(request: NextRequest) {
  try {
    const sql = getDb()
    const { productId, deviceId, voteType } = await request.json()
    
    if (!productId || !deviceId || !['like', 'dislike'].includes(voteType)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    
    // Check if device already voted for this product
    const existingVote = await sql`
      SELECT vote_type FROM product_votes WHERE product_id = ${productId} AND device_id = ${deviceId}
    `
    
    if (existingVote.length > 0) {
      const previousVoteType = existingVote[0].vote_type
      
      if (previousVoteType === voteType) {
        // Same vote type - remove the vote (toggle off)
        await sql`
          DELETE FROM product_votes WHERE product_id = ${productId} AND device_id = ${deviceId}
        `
        
        // Decrement the count
        if (voteType === 'like') {
          await sql`
            UPDATE product_vote_counts SET likes = likes - 1 WHERE product_id = ${productId}
          `
        } else {
          await sql`
            UPDATE product_vote_counts SET dislikes = dislikes - 1 WHERE product_id = ${productId}
          `
        }
        
        // Fetch updated counts
        const updatedCounts = await sql`
          SELECT likes, dislikes FROM product_vote_counts WHERE product_id = ${productId}
        `
        
        return NextResponse.json({
          success: true,
          action: 'removed',
          likes: updatedCounts[0]?.likes || 0,
          dislikes: updatedCounts[0]?.dislikes || 0,
          userVote: null,
        })
      } else {
        // Different vote type - switch the vote
        await sql`
          UPDATE product_votes SET vote_type = ${voteType} WHERE product_id = ${productId} AND device_id = ${deviceId}
        `
        
        // Update counts: increment new, decrement old
        if (voteType === 'like') {
          await sql`
            UPDATE product_vote_counts SET likes = likes + 1, dislikes = dislikes - 1 WHERE product_id = ${productId}
          `
        } else {
          await sql`
            UPDATE product_vote_counts SET likes = likes - 1, dislikes = dislikes + 1 WHERE product_id = ${productId}
          `
        }
        
        // Fetch updated counts
        const updatedCounts = await sql`
          SELECT likes, dislikes FROM product_vote_counts WHERE product_id = ${productId}
        `
        
        return NextResponse.json({
          success: true,
          action: 'switched',
          likes: updatedCounts[0]?.likes || 0,
          dislikes: updatedCounts[0]?.dislikes || 0,
          userVote: voteType,
        })
      }
    }
    
    // New vote
    await sql`
      INSERT INTO product_votes (product_id, device_id, vote_type) VALUES (${productId}, ${deviceId}, ${voteType})
    `
    
    // Increment the count
    if (voteType === 'like') {
      await sql`
        UPDATE product_vote_counts SET likes = likes + 1 WHERE product_id = ${productId}
      `
    } else {
      await sql`
        UPDATE product_vote_counts SET dislikes = dislikes + 1 WHERE product_id = ${productId}
      `
    }
    
    // Fetch updated counts
    const updatedCounts = await sql`
      SELECT likes, dislikes FROM product_vote_counts WHERE product_id = ${productId}
    `
    
    return NextResponse.json({
      success: true,
      action: 'added',
      likes: updatedCounts[0]?.likes || 0,
      dislikes: updatedCounts[0]?.dislikes || 0,
      userVote: voteType,
    })
  } catch (error) {
    console.error('Error processing vote:', error)
    return NextResponse.json({ error: 'Failed to process vote' }, { status: 500 })
  }
}
