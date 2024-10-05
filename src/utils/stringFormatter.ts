import DOMPurify from 'isomorphic-dompurify';

type SanitizeHtmlProps = {
  str: string;
  options: {
    sanitize?: boolean;
    sanitizeOptions?: DOMPurify.Config;
    truncateOn?: number;
    removeHtmlTags?: boolean;
    stringReplace?: {
      from: string;
      to: string;
    };
    firstCapital?: boolean;
  };
};

const stringFormatter = ({ str, options }: SanitizeHtmlProps): string => {
  const {
    truncateOn,
    removeHtmlTags,
    stringReplace,
    sanitize,
    sanitizeOptions,
  } = options;

  if (!str) {
    return '';
  }

  let sanitizedStr = str;
  if (sanitize) {
    sanitizedStr = DOMPurify.sanitize(sanitizedStr, {
      ...sanitizeOptions,
    }).toString();
  }

  if (removeHtmlTags) {
    sanitizedStr = sanitizedStr.replace(/<[^>]+>/g, '');
  }

  if (stringReplace?.from && stringReplace?.to) {
    sanitizedStr = sanitizedStr.replace(
      new RegExp(stringReplace.from, 'g'),
      stringReplace.to
    );
  }

  if (options.firstCapital) {
    sanitizedStr = sanitizedStr.charAt(0).toUpperCase() + sanitizedStr.slice(1);
  }

  if (truncateOn && sanitizedStr.length > truncateOn) {
    sanitizedStr = sanitizedStr.slice(0, truncateOn) + '...';
  }

  return sanitizedStr;
};

export default stringFormatter;
