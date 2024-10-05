import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  slot1: React.ReactNode[];
  slot2: React.ReactNode[];
};
export type TwoSectionsProps = React.ComponentPropsWithoutRef<'section'> &
  Partial<Props>;

const TwoSections = (props: TwoSectionsProps) => {
  const { slot1, slot2 } = {
    ...TwoSectionsDefaults,
    ...props,
  } as Props;
  return (
    <section id="header" className="px-[5%] py-24 md:py-[17vh] ">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>{slot1}</div>
          <div>{slot2}</div>
        </div>
      </div>
    </section>
  );
};
export const TwoSectionsDefaults: TwoSectionsProps = {
  slot1: [
    <h1 key="title" className="h1 text-red-400">
      Medium length hero heading goes here
    </h1>,
    <p key="text" className="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>,
    <div key="content" className="flex gap-4 mt-6">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>,
  ],
  slot2: [
    <h1 key="title" className="h1 text-red-400">
      Medium length hero heading goes here
    </h1>,
    <p key="text" className="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique. Duis cursus, mi quis viverra
      ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>,
    <div key="content" className="flex gap-4 mt-6">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>,
  ],
};
export default TwoSections;
