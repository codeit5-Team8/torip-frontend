export function extractBasePath(path: string) {
  const segments = path.split('/');
  return segments.length > 1 ? `/${segments[1]}` : '/';
}
