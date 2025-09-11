export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      registrations: {
        Row: {
          id: string
          team_name: string
          team_leader_name: string
          team_leader_email: string
          team_leader_phone: string
          team_size: number
          institution: string | null
          state: string | null
          github_profile: string | null
          linkedin_profile: string | null
          team_members: Json
          registration_date: string
          created_at: string
          payment_screenshot: string | null
          name: string | null
          utr_number: string | null
        }
        Insert: {
          id?: string
          team_name: string
          team_leader_name: string
          name?: string
          team_leader_email: string
          team_leader_phone: string
          team_size: number
          institution?: string | null
          state?: string | null
          github_profile?: string | null
          linkedin_profile?: string | null
          team_members?: Json
          registration_date?: string
          created_at?: string
          payment_screenshot?: string | null
          utr_number?: string | null
        }
        Update: {
          id?: string
          team_name?: string
          team_leader_name?: string
          name?: string
          team_leader_email?: string
          team_leader_phone?: string
          team_size?: number
          institution?: string | null
          state?: string | null
          github_profile?: string | null
          linkedin_profile?: string | null
          team_members?: Json
          registration_date?: string
          created_at?: string
          payment_screenshot?: string | null
          utr_number?: string | null
        }
      }
    }
  }
}