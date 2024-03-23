export type MockBlog = {
  id: number;
  title: string;
  description: string;
};

export type MockBlogDetail = MockBlog & {
  content: string;
};

export type MockBlogs = {
  total: number;
  items: MockBlog[];
};
