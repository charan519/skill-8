/*
  # Add UTR number column to registrations table

  1. Changes
    - Add `utr_number` column to registrations table
    - Add unique constraint to prevent duplicate UTR numbers
    - Add index for better query performance

  2. Security
    - UTR numbers must be unique across all registrations
*/

-- Add UTR number column
ALTER TABLE registrations 
ADD COLUMN IF NOT EXISTS utr_number text;

-- Add unique constraint for UTR numbers
ALTER TABLE registrations 
ADD CONSTRAINT unique_utr_number UNIQUE (utr_number);

-- Add index for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_utr ON registrations (utr_number);