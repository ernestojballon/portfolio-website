import stringFormatter from '@/utils/stringFormatter';
import { PostListItem } from './types';
import appConfig from '@/app/app.config';
import { formatReadableDate } from '@/utils/formatReadableDate';

type SanitizePost = (post: PostListItem) => PostListItem;

export const postSanitizer: SanitizePost = (post) => {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    categories: (post.categories || [])
      .filter((cat) => 'Uncategorized' !== cat)
      .map((cat) => cat.toUpperCase()),
    featuredImage: post.featuredImage
      ? stringFormatter({
          str: post.featuredImage,
          options: {
            stringReplace: {
              from: appConfig.wordpressApiUrl,
              to: appConfig.wordpressCloudfrontUrl,
            },
          },
        })
      : 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
    author: post.author
      ? stringFormatter({
          str: post.author,
          options: {
            allWordsFirstCapital: true,
          },
        })
      : '',
    authorImage: post.authorImage,
    excerpt: post.excerpt
      ? stringFormatter({
          str: post.excerpt,
          options: {
            removeHtmlTags: true,
            truncateOn: 150,
            firstCapital: true,
          },
        })
      : '',
    date: post.date && formatReadableDate(post.date),
    content: post.content
      ? stringFormatter({
          str: post.content,
          options: {
            sanitize: true,
            sanitizeOptions: {
              ADD_TAGS: ['iframe'],
              ADD_ATTR: [
                'allow',
                'allowfullscreen',
                'frameborder',
                'scrolling',
                'src',
              ],
              ALLOW_UNKNOWN_PROTOCOLS: true,
              ALLOWED_URI_REGEXP:
                /^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
            },
            stringReplace: {
              from: appConfig.wordpressApiUrl,
              to: appConfig.wordpressCloudfrontUrl,
            },
          },
        })
      : '',
  };
};
