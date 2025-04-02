import MarkdownIt from 'markdown-it';
import type {Articles, ArticleInfo} from "../types/article.ts";
import axios from "axios";
// 解析器
const md = new MarkdownIt();
export default {
    data(){
        return{
            markdownContent:''
        };
    },
    created(){
        this.loadMarkdown();
    },
    methods:{
        loadMarkdown(){
            axios.get('public/articles/*.md')
                .then((response)=>{
                    this.markdownContent = md.render(response.data);

                })
                .catch((error)=>{
                    console.log('Error loading markdown file:',error);
                });
        }
    }
}