import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nqojtbaccjdphwkheekl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xb2p0YmFjY2pkcGh3a2hlZWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExOTY1MTIsImV4cCI6MjA4Njc3MjUxMn0.asrujLHwVw__zMwzGKKsQkDxAYNYgVBHmiRLPrpNdkk';

export const supabase = createClient(supabaseUrl, supabaseKey);