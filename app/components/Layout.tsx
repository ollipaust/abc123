import Content from './Content';

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='min-h-screen flex flex-col'>
            {/* Main Content */}
            <main className='flex-grow'>
                <Content>{children}</Content>
            </main>
        </div>
    );
}
