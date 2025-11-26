import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Eye Care Blog | Expert Insights & Tips | Orange County',
    description: 'Stay informed about the latest in eye health, keratoconus treatments, dry eye relief, and more from Dr. Bonakdar and the EyeCare Center of Orange County team.',
};

export default function BlogIndexPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Eye Health Insights
                        </h1>
                        <p className="text-xl text-eyecare-lighter-blue max-w-2xl mx-auto">
                            Expert advice, treatment updates, and patient guides from Orange County's leading eye care specialists.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <article key={post.slug} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                    <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden group">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-eyecare-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            {post.category}
                                        </div>
                                    </Link>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-eyecare-blue transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link href={`/blog/${post.slug}`} className="text-eyecare-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                                                Read More <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
