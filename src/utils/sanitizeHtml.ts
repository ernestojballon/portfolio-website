import DOMPurify from 'isomorphic-dompurify';

type SanitizeHtmlProps = {
  htmlString: string;
  options: {
    truncateOn?: number;
    removeHtmlTags?: boolean;
    stringReplace?: {
      from: string;
      to: string;
    };
    firstCapital?: boolean;
  };
};

export const sanitizeHtml = ({ htmlString, options }: SanitizeHtmlProps): string => {
  const { truncateOn, removeHtmlTags, stringReplace } = options;

  let sanitizedHtml = DOMPurify.sanitize(htmlString);

  if (removeHtmlTags) {
    sanitizedHtml = sanitizedHtml.replace(/<[^>]+>/g, '');
  }

  if (stringReplace?.from && stringReplace?.to) {
    sanitizedHtml = sanitizedHtml.replace(new RegExp(stringReplace.from, 'g'), stringReplace.to);
  }

  if (options.firstCapital) {
    sanitizedHtml = sanitizedHtml.charAt(0).toUpperCase() + sanitizedHtml.slice(1);
  }

  if (truncateOn && sanitizedHtml.length > truncateOn) {
    sanitizedHtml = sanitizedHtml.slice(0, truncateOn) + '...';
  }

  return sanitizedHtml;
};