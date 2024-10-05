// components/ClientSideExcerpt.tsx
'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

type ClientSideHTMLProps = {
  content: string;
  as?: React.ElementType;
};

const ClientSideHTML: React.FC<ClientSideHTMLProps> = ({
  content,
  as: Element = 'div',
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  const sanitizedExcerpt = DOMPurify.sanitize(content);

  return <p dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }} />;
};

export default ClientSideHTML;
