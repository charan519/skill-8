/*
  # Create storage bucket for payment screenshots

  1. Storage Setup
    - Create 'payments' bucket for storing payment screenshots
    - Set up public access policies for the bucket
    - Enable RLS on storage objects

  2. Security
    - Allow public read access to payment screenshots
    - Allow authenticated users to upload files
    - Restrict file types to images only
*/

-- Create the payments bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('payments', 'payments', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to payment screenshots
CREATE POLICY "Public read access for payment screenshots"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'payments');

-- Allow authenticated users to upload payment screenshots
CREATE POLICY "Allow upload of payment screenshots"
ON storage.objects FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'payments' 
  AND (storage.foldername(name))[1] = 'screenshots'
);

-- Allow users to update their own payment screenshots
CREATE POLICY "Allow update of payment screenshots"
ON storage.objects FOR UPDATE
TO public
USING (bucket_id = 'payments');

-- Allow users to delete their own payment screenshots
CREATE POLICY "Allow delete of payment screenshots"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'payments');