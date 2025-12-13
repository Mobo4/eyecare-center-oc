import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/contact-info';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | EyeCare Center OC Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            images: [post.image],
        },
        alternates: {
            canonical: `https://eyecarecenteroc.com/blog/${post.slug}`,
        },
    };
}

import JsonLd from '@/components/JsonLd';

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "EyeCare Center of Orange County",
            "logo": {
                "@type": "ImageObject",
                "url": "https://eyecarecenteroc.com/favicon.svg"
            }
        },
        "datePublished": post.date,
        "description": post.excerpt
    };

    return (
        <>
            <JsonLd data={blogPostingSchema} id="blog-posting-schema" />
            <Header />
            <main className="min-h-screen bg-white">
                {/* Article Header */}
                <header className="bg-gray-50 py-12 border-b border-gray-200">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-eyecare-blue mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-eyecare-blue/10 text-eyecare-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-gray-500" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{post.author}</div>
                                        <div className="text-xs text-gray-500">Medical Director</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12 relative z-10">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div
                        className="prose prose-lg prose-blue max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="mt-12 bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Have Questions About Your Eye Health?</h3>
                        <p className="text-eyecare-lighter-blue mb-8 max-w-xl mx-auto">
                            Dr. Alexander Bonakdar and his team are here to help. Schedule a consultation to discuss your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={CONTACT_INFO.primaryPhone.href}
                                className="callrail-phone inline-flex items-center justify-center bg-white text-eyecare-blue px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                            >
                                Call {CONTACT_INFO.primaryPhone.display}
                            </a>
                            <Link
                                href="/book-appointment"
                                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-eyecare-blue transition-all"
                            >
                                Book Online
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
