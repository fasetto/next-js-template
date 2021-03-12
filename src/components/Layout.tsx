
type Props = { children?: React.ReactNode; }
type Component<T> = (props: T) => JSX.Element;
type LayoutType = { Empty?: Component<Props> } & Component<Props>;

export const Layout: LayoutType = ({ children }: Props) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

Layout.Empty = ({ children }) => (
    <>
        {children}
    </>
);

export default Layout;
