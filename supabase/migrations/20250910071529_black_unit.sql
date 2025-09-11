/*
  # Update registrations table for payment functionality

  1. Changes
    - Add payment_screenshot column to store file paths
    - Ensure all required columns exist with proper types

  2. Security
    - Maintain existing RLS policies
*/

-- Add payment_screenshot column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'registrations' AND column_name = 'payment_screenshot'
  ) THEN
    ALTER TABLE registrations ADD COLUMN payment_screenshot text;
  END IF;
END $$;

-- Ensure we have a name column (might be team_leader_name)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'registrations' AND column_name = 'name'
  ) THEN
    -- Add name column if it doesn't exist
    ALTER TABLE registrations ADD COLUMN name text;
  END IF;
END $$;

-- Create storage bucket for payments if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('payments', 'payments', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for payments bucket
CREATE POLICY "Anyone can upload payment screenshots"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'payments');

CREATE POLICY "Anyone can view payment screenshots"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'payments');