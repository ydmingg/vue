export function createArticle(data: any) {
  return { id: Date.now(), ...data };
}