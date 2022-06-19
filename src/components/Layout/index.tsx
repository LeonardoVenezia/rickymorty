import SearchField from '../SearchField';

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <SearchField />
            {children}
        </>
    );
}

export default Layout;
