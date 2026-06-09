import fg from 'fast-glob';
import matter from 'gray-matter';

export default {
  async paths() {
    const files = await fg('posts/**/*.md');
    const categories = new Set<string>();

    for (const file of files) {
      const { data } = matter.read(file);
      if (data.category) categories.add(String(data.category));
    }

    return Array.from(categories).map((category) => ({ params: { category } }));
  }
};
