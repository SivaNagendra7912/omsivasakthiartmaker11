"use client"

import { useState, useEffect } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"

interface LikeDislikeButtonsProps {
  productId: number
  initialLikes?: number
  initialDislikes?: number
  deviceId: string
  userVote?: 'like' | 'dislike' | null
  onVote: (productId: number, voteType: 'like' | 'dislike') => Promise<{
    likes: number
    dislikes: number
    userVote: 'like' | 'dislike' | null
  }>
}

export function LikeDislikeButtons({
  productId,
  initialLikes = 0,
  initialDislikes = 0,
  userVote: initialUserVote = null,
  onVote,
}: LikeDislikeButtonsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(initialUserVote)
  const [isLoading, setIsLoading] = useState(false)
  const [animatingLike, setAnimatingLike] = useState(false)
  const [animatingDislike, setAnimatingDislike] = useState(false)

  useEffect(() => {
    setLikes(initialLikes)
    setDislikes(initialDislikes)
    setUserVote(initialUserVote)
  }, [initialLikes, initialDislikes, initialUserVote])

  const handleVote = async (voteType: 'like' | 'dislike') => {
    if (isLoading) return

    setIsLoading(true)
    
    // Trigger animation
    if (voteType === 'like') {
      setAnimatingLike(true)
      setTimeout(() => setAnimatingLike(false), 300)
    } else {
      setAnimatingDislike(true)
      setTimeout(() => setAnimatingDislike(false), 300)
    }

    try {
      const result = await onVote(productId, voteType)
      setLikes(result.likes)
      setDislikes(result.dislikes)
      setUserVote(result.userVote)
    } catch (error) {
      console.error('Vote error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M'
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K'
    }
    return count.toString()
  }

  return (
    <div className="flex items-center justify-center gap-4 pt-3 border-t border-border">
      {/* Like Button */}
      <button
        onClick={() => handleVote('like')}
        disabled={isLoading}
        className={`
          flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300
          ${userVote === 'like' 
            ? 'bg-emerald-500/20 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
            : 'text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10'
          }
          ${animatingLike ? 'scale-110' : 'scale-100'}
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        aria-label={`Like this product. Current likes: ${likes}`}
      >
        <ThumbsUp 
          className={`h-5 w-5 transition-all duration-300 ${
            userVote === 'like' ? 'fill-emerald-500' : ''
          } ${animatingLike ? 'scale-125' : ''}`} 
        />
        <span className="text-xs font-medium tabular-nums">{formatCount(likes)}</span>
      </button>

      {/* Dislike Button */}
      <button
        onClick={() => handleVote('dislike')}
        disabled={isLoading}
        className={`
          flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300
          ${userVote === 'dislike' 
            ? 'bg-rose-500/20 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]' 
            : 'text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10'
          }
          ${animatingDislike ? 'scale-110' : 'scale-100'}
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        aria-label={`Dislike this product. Current dislikes: ${dislikes}`}
      >
        <ThumbsDown 
          className={`h-5 w-5 transition-all duration-300 ${
            userVote === 'dislike' ? 'fill-rose-500' : ''
          } ${animatingDislike ? 'scale-125' : ''}`} 
        />
        <span className="text-xs font-medium tabular-nums">{formatCount(dislikes)}</span>
      </button>
    </div>
  )
}
