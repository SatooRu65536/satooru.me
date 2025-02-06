'use client';

import type { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import styles from './index.module.scss';

interface Props {
  content: string;
  className: string;
}

export default function ToHtml(props: Props): ReactElement {
  const { content, className } = props;

  return (
    <ReactMarkdown
      className={`${styles.markdown} ${className}`}
      components={{
        code({ children, className, ...rest }) {
          const match = /language-(\w+)/.exec(className ?? '');
          return match ? (
            <Prism PreTag="div" language={match[1]} showLineNumbers>
              {String(children).replace(/\n$/, '')}
            </Prism>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
      remarkPlugins={[remarkBreaks, remarkGfm, remarkRehype, rehypeRaw, rehypeStringify]}
    >
      {content}
    </ReactMarkdown>
  );
}
