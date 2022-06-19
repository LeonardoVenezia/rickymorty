const Layout = ({ children }) => {
    return (
        <>
            <SearchField handleSearch={handleSearch} />
            <ShowResults />
        </>
    );
}

export default Layout;
