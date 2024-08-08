import { type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export default async function middleware(request: NextRequest) {
  // update user's auth session
  return await createClient(request)
}

export const config = {
    matcher: '/',
}