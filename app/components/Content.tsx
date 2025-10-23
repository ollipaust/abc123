interface ContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <>
            <div className='relative block h-full w-full p-10'>{children}</div>
        </>
    );
};

export default Content;
