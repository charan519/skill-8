/*
  # Create registrations table for Skill Sprint hackathon

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `team_name` (text, team name)
      - `team_leader_name` (text, team leader full name)
      - `team_leader_email` (text, team leader email)
      - `team_leader_phone` (text, team leader phone)
      - `team_size` (integer, number of team members)
      - `institution` (text, college/university)
      - `state` (text, participant state)
      - `github_profile` (text, GitHub URL)
      - `linkedin_profile` (text, LinkedIn URL)
      - `team_members` (jsonb, array of team member names)
      - `registration_date` (timestamptz, when registered)
      - `created_at` (timestamptz, record creation time)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for public insert (registration)
    - Add policy for authenticated read (admin access)
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_name text NOT NULL,
  team_leader_name text NOT NULL,
  team_leader_email text NOT NULL,
  team_leader_phone text NOT NULL,
  team_size integer NOT NULL CHECK (team_size >= 2 AND team_size <= 4),
  institution text,
  state text,
  github_profile text,
  linkedin_profile text,
  team_members jsonb DEFAULT '[]'::jsonb,
  registration_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to register (insert)
CREATE POLICY "Anyone can register"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all registrations (for admin)
CREATE POLICY "Authenticated users can read registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(team_leader_email);
CREATE INDEX IF NOT EXISTS idx_registrations_date ON registrations(registration_date);