export default function Lead({ children }: { children: React.ReactNode }) {
    return (
        <code className="fs-5 fw-light text-primary-emphasis">
            {children}
        </code>
    );
}