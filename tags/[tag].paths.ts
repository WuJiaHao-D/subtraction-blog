import fg from 'fast-glob';
import matter from 'gray-matter';

export default {
  async paths() {
    const files = await fg('posts/**/*.md');
    const tags = new Set<string>();

    for (const file of files) {
      const { data } = matter.read(file);
      const value = data.tags;
      if (Array.isArray(value)) {
        for (const tag of value) tags.add(String(tag));
      } else if (value != null) {
        tags.add(String(value));
      }
    }

    return Array.from(tags).map((tag) => ({ params: { tag } }));
  }
};
