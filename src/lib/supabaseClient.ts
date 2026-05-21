const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return (
    typeof supabaseUrl === 'string' &&
    typeof supabaseAnonKey === 'string' &&
    supabaseUrl.trim() !== '' &&
    supabaseAnonKey.trim() !== '' &&
    !supabaseUrl.includes('seuid-supabase.supabase.co') &&
    !supabaseAnonKey.includes('sua-chave-anon-publica-aqui')
  );
}

export async function supabaseFetch(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured. Define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${supabaseUrl.trim()}/rest/v1${cleanPath}`;

  const headers = new Headers(options.headers);
  headers.set('apikey', supabaseAnonKey.trim());
  headers.set('Authorization', `Bearer ${supabaseAnonKey.trim()}`);

  if (
    !headers.has('Content-Type') &&
    options.method &&
    ['POST', 'PATCH', 'PUT'].includes(options.method.toUpperCase())
  ) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
  }

  return response;
}
