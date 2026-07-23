/**
 * Turns a title into a URL-safe slug, e.g. "Can't Hurt Me" -> "cant-hurt-me".
 * Used to match book/movie entries in config to their optional MDX note
 * file of the same slug, without having to hand-maintain a slug per entry.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/['’]/g, '') // drop apostrophes instead of turning them into hyphens
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
