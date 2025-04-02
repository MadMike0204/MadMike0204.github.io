// 这玩意用来将md转为html 并暴露出去,不会在浏览器运行,只在本地运行
import type {Articles, ArticleInfo} from "../types/article.ts";
import {marked} from 'marked'; // 解析markdown文件
import matter from "gray-matter"; // 解析md的front matter


// 使用 vite 提供的api:import.meta.glob 用于动态地导入多个文件
// 键:文件路径
// 值:?
// eager: vite立即加载所有文件，而不是懒加载

const markdownModules = import.meta.glob('./assets/articles/*.md', {
    eager: true,
});
// 声明Articles
const articles: Articles = [];
// 遍历所有md文件
for (const path in markdownModules) {
    // 这个循环在做的事情: 解析md 元数据+内容 并写到规定类型的实例里
    // (bonus: try-catch提高容错率,比如解析失败了怎么办)

    // 解析md的meta数据和内容,存到不同的变量里
    const rawContent = markdownModules[path];
    const {data: frontmatter, content: markdownContent} = matter(rawContent);

    // 将md转为html
    let htmlContent = '';
    // 用try-catch 如果能转换,html就是正常的,如果不能,转换，就输出一个Error信息
    try {
        htmlContent = marked(markdownContent) as string;
    } catch (e) {
        console.error(`Error parsing markdown for ${path}:`, e);
        htmlContent = `<p>Error parsing markdown content.</p>`
    }
    // 设置标题与id
    if(1){
    //if (frontmatter.headline && frontmatter.id) {
        const article: ArticleInfo = {
            id: frontmatter.id,
            headline: frontmatter.id,
            content: htmlContent,
            tags: frontmatter.tags || [], // 这什么鬼写法???????
        };
        articles.push(article);
    }else{
        console.warn(`Failed to parse markdown for ${path}:`,
            `\nbecause it lacks necessary frontmatter(id,headline)`);
    }
}
// 拿出来给别人用() 诶嘿
export const allParsedArticles = articles;