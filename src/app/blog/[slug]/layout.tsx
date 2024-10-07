import React from 'react';
import { ReactNode } from 'react';
import styles from './wordpressStyles.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="User's blog » Feed"
          href="https://wordpress.ernestoballon.com/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="User's blog » Comments Feed"
          href="https://wordpress.ernestoballon.com/comments/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="User's blog » Java and JavaScript Comments Feed"
          href="https://wordpress.ernestoballon.com/java-and-javascript/feed/"
        />
        <link
          rel="stylesheet"
          id="dashicons-css"
          href="https://drxtoysoe50lt.cloudfront.net/wp-includes/css/dashicons.min.css?ver=6.6.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="admin-bar-css"
          href="https://drxtoysoe50lt.cloudfront.net/wp-includes/css/admin-bar.min.css?ver=6.6.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-navigation-css"
          href="https://drxtoysoe50lt.cloudfront.net/wp-includes/blocks/navigation/style.min.css?ver=6.6.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-table-css"
          href="https://drxtoysoe50lt.cloudfront.net/wp-includes/blocks/table/style.min.css?ver=6.6.2"
          media="all"
        />
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://drxtoysoe50lt.cloudfront.net/wp-includes/css/dist/block-library/common.min.css?ver=6.6.2"
          media="all"
        />
        <link
          rel="https://api.w.org/"
          href="https://wordpress.ernestoballon.com/wp-json/"
        />
        <link
          rel="alternate"
          title="JSON"
          type="application/json"
          href="https://wordpress.ernestoballon.com/wp-json/wp/v2/posts/107"
        />
        <link
          rel="EditURI"
          type="application/rsd+xml"
          title="RSD"
          href="https://wordpress.ernestoballon.com/xmlrpc.php?rsd"
        />
        <link
          rel="canonical"
          href="https://wordpress.ernestoballon.com/java-and-javascript/"
        />
        <link
          rel="shortlink"
          href="https://wordpress.ernestoballon.com/?p=107"
        />
        <link
          rel="alternate"
          title="oEmbed (JSON)"
          type="application/json+oembed"
          href="https://wordpress.ernestoballon.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.ernestoballon.com%2Fjava-and-javascript%2F"
        />
        <link
          rel="alternate"
          title="oEmbed (XML)"
          type="text/xml+oembed"
          href="https://wordpress.ernestoballon.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwordpress.ernestoballon.com%2Fjava-and-javascript%2F&amp;format=xml"
        />
      </div>
      <main className={styles.wordpressContent}>{children}</main>
    </>
  );
}
