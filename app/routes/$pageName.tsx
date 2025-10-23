import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import appConfig from '~/site-config';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { pageName } = params;

    if (!pageName) {
        throw new Response('Page not found', { status: 404 });
    }

    const pageData = appConfig.pages[pageName];

    if (!pageData || !pageData.is_published) {
        throw new Response('Page not found', { status: 404 });
    }

    return json({ pageData, pageName });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    if (!data) {
        return [{ title: 'Page Not Found' }];
    }

    const { pageData } = data;
    const title = `${pageData.page_title} – ${appConfig.siteName}`;

    return [
        { title },
        { name: 'description', content: pageData.page_description },
        { name: 'robots', content: 'index,follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: appConfig.siteName },
        { property: 'og:title', content: pageData.page_title },
        { property: 'og:description', content: pageData.page_description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.page_title },
        { name: 'twitter:description', content: pageData.page_description },
        { name: 'theme-color', content: appConfig.primaryColor },
    ];
};

export default function DynamicPage(): JSX.Element {
    const { pageData, pageName } = useLoaderData<typeof loader>();
    const primary = appConfig.primaryColor;

    return (
        <motion.div
            className='relative overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            {/* BACKDROP GLOW */}
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 -z-10'
            >
                <div
                    className='h-full w-full rounded-2xl'
                    style={{
                        backgroundImage:
                            `radial-gradient(60rem 40rem at 0% 0%, ${primary}22 0%, transparent 60%),` +
                            `radial-gradient(70rem 50rem at 100% 10%, ${primary}18 0%, transparent 65%),` +
                            `linear-gradient(180deg, #ffffff00 0%, #ffffff55 100%)`,
                    }}
                />
            </div>

            {/* MAIN CONTAINER */}
            <div className='mx-auto rounded-2xl border border-white/30 bg-white/10 shadow-xl ring-1 ring-black/5 backdrop-blur-xl'>
                {/* HEADER */}
                <motion.header
                    className='flex items-center justify-between gap-4 px-6 py-5 sm:px-10'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to='/'
                        className='inline-flex items-center gap-3'
                    >
                        <span className='text-2xl font-extrabold tracking-tight text-slate-100 text-shadow-md shadow-slate-800'>
                            {appConfig.siteName}
                        </span>
                    </Link>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {appConfig.menuItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        to={href}
                                        className='text-lg text-slate-200 hover:text-slate-700 transition-all ease-linear duration-300'
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </motion.header>

                {/* MAIN BODY */}
                <main className='px-6 pb-12 sm:px-10 sm:pb-16'>
                    {/* PAGE HEADER */}
                    <motion.section
                        className='relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 px-8 py-14 shadow-lg backdrop-blur-2xl sm:px-12 lg:px-16'
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className='relative z-10'>
                            <h1 className='text-pretty text-5xl font-display font-extrabold tracking-tight sm:text-6xl lg:text-7xl'>
                                <span className='bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent drop-shadow-md'>
                                    {pageData.page_title}
                                </span>
                            </h1>

                            {pageData.page_description && (
                                <p className='mt-6 max-w-2xl text-xl text-gray-800 leading-relaxed'>
                                    {pageData.page_description}
                                </p>
                            )}
                        </div>

                        {/* Bottom gradient fade */}
                        <div
                            aria-hidden
                            className='pointer-events-none absolute -inset-x-8 -bottom-8 h-24 bg-gradient-to-t from-white/30 to-transparent'
                        />
                    </motion.section>

                    {/* PAGE CONTENT SECTIONS */}
                    <section className='mt-10 space-y-8'>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className='overflow-hidden rounded-2xl border border-white/30 bg-white/30 p-8 shadow-lg backdrop-blur-2xl'
                        >
                            {pageData.sections.length > 0 ? (
                                <div className='prose prose-lg max-w-none prose-a:text-gray-900'>
                                    {pageData.sections.map(section => (
                                        <article key={section.id}>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: section.content,
                                                }}
                                            />
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <EmptyState primary={primary} />
                            )}
                        </motion.div>
                    </section>
                </main>

                {/* FOOTER */}
                <footer className='rounded-b-2xl border-t border-white/30 px-6 py-8 text-center text-base text-gray-800 sm:px-10'>
                    <p>
                        {appConfig.footerText.replace('2024', new Date().getFullYear().toString())}
                    </p>
                </footer>
            </div>
        </motion.div>
    );
}

function EmptyState({ primary }: { primary: string }) {
    return (
        <div className='rounded-xl border border-white/30 bg-white/20 p-6 text-center shadow-sm backdrop-blur-xl'>
            <LayoutDashboard className='mx-auto mb-4 h-8 w-8 text-gray-700' />
            <p className='text-gray-800 text-lg font-medium'>No content yet</p>
            <p className='mt-1 text-sm text-gray-700'>
                Start editing your page to see it come to life.
            </p>
            <div className='mt-4'>
                <Link
                    to='/hub/projects/config'
                    className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow'
                    style={{ backgroundColor: primary }}
                >
                    <LayoutDashboard className='h-4 w-4' />
                    Open Dashboard
                </Link>
            </div>
        </div>
    );
}
