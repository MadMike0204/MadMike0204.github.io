// 规范帖子对象 并提供帖子数组类型
export interface ArticleInfo {
    id: string;
    headline: string;
    content: string;
    tags: string[];
}

export type Articles = Array<ArticleInfo>;