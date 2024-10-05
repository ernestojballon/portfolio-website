import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { RxChevronRight } from 'react-icons/rx';

type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url?: string;
  image?: ImageProps;
  category?: string;
  readTime?: string;
  title?: string;
  excerpt?: string;
  avatar?: ImageProps;
  fullName?: string;
  date?: string;
  button?: any;
};

type Props = {
  slot1: React.ReactNode[];
  blogPosts: BlogPost[];
};

export type BlogListProps = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const BlogList = (props: BlogListProps) => {
  const { slot1, blogPosts } = {
    ...BlogListDefaults,
    ...props,
  } as Props;
  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-10 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-12 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div>{slot1}</div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div className="flex flex-col" key={index}>
              <Link
                href={post?.url || ''}
                className="mb-6 inline-block w-full max-w-full"
              >
                <div className="w-full overflow-hidden">
                  <Image
                    src={post?.image?.src || ''}
                    alt={post?.image?.alt || ''}
                    width={600}
                    height={400}
                    className="aspect-[3/2] size-full object-cover"
                  />
                </div>
              </Link>
              <a
                href={post.url}
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                {post.category}
              </a>

              <a href={post.url} className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
              </a>
              {post.excerpt}
              <div className="pt-6 flex items-center mt-auto">
                <div className="mr-4 shrink-0">
                  <Image
                    src={post?.avatar?.src || ''}
                    alt={post?.avatar?.alt || ''}
                    width={48}
                    height={48}
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">{post.fullName}</h6>
                  <div className="flex items-center">
                    <p className="text-sm">{post.date}</p>
                    {post.readTime && (
                      <>
                        <span className="mx-2">•</span>
                        <p className="text-sm">{post.readTime}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BlogListDefaults: BlogListProps = {
  slot1: [
    <div key={'Tagline'} className="md:mr-12 lg:mr-0 ">
      <div className="w-full max-w-lg">
        <p className="mb-3 font-semibold md:mb-4">Blog</p>
        <h2 className="mb-3 h1 font-bold md:mb-4 ">This is my blog title</h2>
        <p className="md:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
    </div>,
    <div key={'CTA'} className="absolute right-0 hidden md:flex ">
      <Button>More</Button>
    </div>,
  ],

  blogPosts: [
    {
      url: '#',
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
        alt: ' placeholder image 1',
      },
      category: 'Category',
      title: 'Blog title heading will go here',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: ' placeholder avatar 3',
      },
      fullName: 'Full name',
      date: '11 Jan 2022',
      readTime: '5 min read',
      button: {
        title: 'Read more',
        variant: 'link',
        size: 'link',
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: '#',
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
        alt: ' placeholder image 2',
      },
      category: 'Category',
      title: 'Blog title heading will go here',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: ' placeholder avatar 3',
      },
      fullName: 'Full name',
      date: '11 Jan 2022',
      readTime: '5 min read',
      button: {
        title: 'Read more',
        variant: 'link',
        size: 'link',
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: '#',
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
        alt: ' placeholder image 3',
      },
      category: 'Category',
      title: 'Blog title heading will go here',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: ' placeholder avatar 3',
      },
      fullName: 'Full name',
      date: '11 Jan 2022',
      readTime: '5 min read',
      button: {
        title: 'Read more',
        variant: 'link',
        size: 'link',
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
export default BlogList;
