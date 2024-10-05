import Image from 'next/image';

type Props = {
  image: {
    src: string;
    alt?: string;
  };
  heading: string;
  children: React.ReactNode;
};

export type TitleChidrenProps = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

export const TitleChidren = (props: TitleChidrenProps) => {
  const { image, heading, children } = {
    ...TitleChidrenDefaults,
    ...props,
  } as Props;
  return (
    <section className=" py-16 md:py-16 lg:py-16">
      <Image
        src="/images/lines-header.png"
        width={1200}
        height={400}
        className="w-full object-cover h-[5rem] "
        alt={image.alt || ''}
      />
      <div className="container px-[5%]">
        <div className="rb-12 mb-10 md:mb-12 lg:mb-14"></div>
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="rb-5 mb-5 h1 font-bold md:mb-6 ">{heading}</h2>
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
};

export const TitleChidrenDefaults: TitleChidrenProps = {
  image: {
    src: 'https://via.placeholder.com/800x400',
    alt: 'placeholder',
  },
  heading: 'Short heading goes here',
  children: (
    <div>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
        scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque
        amet nulla purus habitasse.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
        condimentum mi massa. In tincidunt pharetra consectetur sed duis
        facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
        dictum eget nibh tortor commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
        Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
        posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
        cursus diam.
      </p>
    </div>
  ),
};

export default TitleChidren;
