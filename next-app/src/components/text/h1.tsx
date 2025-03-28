export default function H1({ children, extraClasses }: { children: React.ReactNode, extraClasses?: string }) {
    return (
        <h1
            className={`txt-h1 fs-6 fw-normal text-warning-emphasis ${extraClasses}`}
            style={{ letterSpacing: "0.1rem" }}
            >
            {children}
        </h1>
    );
}