export function getDate(dateString: Date): string {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  const localString = date.toLocaleDateString('ru', options);

  return localString;
}
