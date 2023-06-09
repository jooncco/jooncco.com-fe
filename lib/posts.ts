// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import {remark} from 'remark';
// import remarkHtml from 'remark-html';

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData(): any {
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     const id = fileName.replace(/\.md$/, '');
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     const matterResult = matter(fileContents).data as any;

//     return {
//       id,
//       ...matterResult,
//     };
//   });
//   return allPostsData.sort((a, b) => {
//     // Newest post first
//     return a.date > b.date ? -1 : 1;
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ''),
//       },
//     };
//   });
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const matterResult = matter(fileContents);
//   const processedContent = await remark()
//     .use(remarkHtml)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();
//   return {
//     id,
//     ...matterResult.data,
//     contentHtml,
//   };
// }
