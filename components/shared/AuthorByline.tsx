/**
 * FILE: components/shared/AuthorByline.tsx
 * PURPOSE: Author attribution component for E-E-A-T compliance
 * AUTHOR: Claude Code
 * CREATED: 2025-11-21
 *
 * CONTEXT: Displays author credentials on medical content pages.
 * Critical for Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
 */

import Image from 'next/image';
import Link from 'next/link';

interface AuthorBylineProps {
  author: {
    name: string;
    credentials: string;
    title: string;
    slug: string;
    photo?: string;
  };
  datePublished: string;
  dateModified?: string;
  className?: string;
  showPhoto?: boolean;
  variant?: 'full' | 'compact' | 'inline';
}

export default function AuthorByline({
  author,
  datePublished,
  dateModified,
  className = '',
  showPhoto = true,
  variant = 'full'
}: AuthorBylineProps) {
  const formattedPublishDate = new Date(datePublished).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedModifiedDate = dateModified
    ? new Date(dateModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  if (variant === 'inline') {
    return (
      <p className={`text-sm text-gray-500 ${className}`}>
        Reviewed by{' '}
        <Link
          href={`/doctors/${author.slug}`}
          className="text-eyecare-blue hover:underline font-medium"
        >
          Dr. {author.name}, {author.credentials}
        </Link>
        {formattedModifiedDate && (
          <> • Updated {formattedModifiedDate}</>
        )}
      </p>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {showPhoto && author.photo && (
          <Image
            src={author.photo}
            alt={`Dr. ${author.name}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div className="text-sm">
          <p className="text-gray-600">
            Medically reviewed by{' '}
            <Link
              href={`/doctors/${author.slug}`}
              className="text-eyecare-blue hover:underline font-medium"
            >
              Dr. {author.name}, {author.credentials}
            </Link>
          </p>
          {formattedModifiedDate && (
            <p className="text-gray-400 text-xs">Last updated: {formattedModifiedDate}</p>
          )}
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-4">
        {showPhoto && author.photo && (
          <Link href={`/doctors/${author.slug}`}>
            <Image
              src={author.photo}
              alt={`Dr. ${author.name}`}
              width={64}
              height={64}
              className="rounded-full hover:ring-2 hover:ring-eyecare-blue transition-all"
            />
          </Link>
        )}
        <div className="flex-1">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Medically Reviewed By
          </p>
          <Link
            href={`/doctors/${author.slug}`}
            className="text-lg font-semibold text-gray-900 hover:text-eyecare-blue transition-colors"
          >
            Dr. {author.name}, {author.credentials}
          </Link>
          <p className="text-sm text-gray-600 mb-2">{author.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>Published: {formattedPublishDate}</span>
            {formattedModifiedDate && formattedModifiedDate !== formattedPublishDate && (
              <span>Last Updated: {formattedModifiedDate}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
