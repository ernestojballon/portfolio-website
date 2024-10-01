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

  let sanitizedHtmlString = DOMPurify.sanitize(htmlString, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'src'],
    ALLOW_UNKNOWN_PROTOCOLS: true,
    ALLOWED_URI_REGEXP: /^(?:(?:https?:)?\/\/)?(?:(?:www|m)\.)?(?:(?:youtube\.com|youtu.be))(?:\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
  });

  if (removeHtmlTags) {
    sanitizedHtmlString = sanitizedHtmlString.replace(/<[^>]+>/g, '');
  }

  if (stringReplace?.from && stringReplace?.to) {
    sanitizedHtmlString = sanitizedHtmlString.replace(new RegExp(stringReplace.from, 'g'), stringReplace.to);
  }

  if (options.firstCapital) {
    sanitizedHtmlString = sanitizedHtmlString.charAt(0).toUpperCase() + sanitizedHtmlString.slice(1);
  }

  if (truncateOn && sanitizedHtmlString.length > truncateOn) {
    sanitizedHtmlString = sanitizedHtmlString.slice(0, truncateOn) + '...';
  }

  return sanitizedHtmlString;
};