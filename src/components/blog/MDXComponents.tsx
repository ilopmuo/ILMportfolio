import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      className="font-display text-2xl text-brand-900 mt-10 mb-4 leading-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-display text-xl text-brand-900 mt-8 mb-3 leading-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-brand-700 text-base leading-[1.85] mb-5" {...props}>
      {children}
    </p>
  ),
  a: ({ href = "", children, ...props }) => (
    <Link
      href={href}
      className="text-brand-900 underline underline-offset-2 decoration-brand-300 hover:decoration-brand-700 transition-colors"
      {...props}
    >
      {children}
    </Link>
  ),
  ul: ({ children, ...props }) => (
    <ul className="flex flex-col gap-2 my-5 pl-4" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="flex flex-col gap-2 my-5 pl-4 list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-brand-700 text-base leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-2 border-brand-500 pl-5 py-1 my-6 text-brand-700 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-brand-900" {...props}>
      {children}
    </strong>
  ),
  hr: () => <hr className="border-brand-100 my-10" />,
};
