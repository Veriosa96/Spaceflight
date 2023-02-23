export interface ArticleList {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: Date;
    featured: boolean;
    launches: any[];
    events: any[];
  }
  