export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      quotes: {
        Row: {
          created_at: string
          fname: string | null
          id: number
          lname: string | null
          quote_entry: string
        }
        Insert: {
          created_at?: string
          fname?: string | null
          id?: number
          lname?: string | null
          quote_entry?: string
        }
        Update: {
          created_at?: string
          fname?: string | null
          id?: number
          lname?: string | null
          quote_entry?: string
        }
        Relationships: []
      }
      resume_entries: {
        Row: {
          created_at: string
          current: boolean | null
          description: string | null
          end_date: string | null
          id: number
          length_time: string | null
          location_city: string | null
          location_state: string | null
          name: string | null
          start_date: string | null
          tags: Json | null
          title: string | null
        }
        Insert: {
          created_at?: string
          current?: boolean | null
          description?: string | null
          end_date?: string | null
          id?: number
          length_time?: string | null
          location_city?: string | null
          location_state?: string | null
          name?: string | null
          start_date?: string | null
          tags?: Json | null
          title?: string | null
        }
        Update: {
          created_at?: string
          current?: boolean | null
          description?: string | null
          end_date?: string | null
          id?: number
          length_time?: string | null
          location_city?: string | null
          location_state?: string | null
          name?: string | null
          start_date?: string | null
          tags?: Json | null
          title?: string | null
        }
        Relationships: []
      }
      resume_job_details: {
        Row: {
          created_at: string
          id: number
          job_id: number | null
          keywords: Json | null
          line_item: string | null
          summary_result: string | null
          themes: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          job_id?: number | null
          keywords?: Json | null
          line_item?: string | null
          summary_result?: string | null
          themes?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          job_id?: number | null
          keywords?: Json | null
          line_item?: string | null
          summary_result?: string | null
          themes?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "resume_job_details_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "resume_entries"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
