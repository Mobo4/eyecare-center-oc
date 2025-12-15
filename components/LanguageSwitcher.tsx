'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        // Get the path without the current locale
        const segments = pathname.split('/').filter(Boolean);

        // Replace or add locale
        if (segments[0] === 'en' || segments[0] === 'es') {
            segments[0] = newLocale;
        } else {
            segments.unshift(newLocale);
        }

        const newPath = '/' + segments.join('/');
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-white/80" />
            <button
                onClick={() => switchLocale('en')}
                className={`text-sm font-medium transition-colors ${locale === 'en'
                        ? 'text-white underline underline-offset-2'
                        : 'text-white/70 hover:text-white'
                    }`}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span className="text-white/50">|</span>
            <button
                onClick={() => switchLocale('es')}
                className={`text-sm font-medium transition-colors ${locale === 'es'
                        ? 'text-white underline underline-offset-2'
                        : 'text-white/70 hover:text-white'
                    }`}
                aria-label="Cambiar a Español"
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;
