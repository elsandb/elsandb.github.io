export default function Lead({ children }: { children: React.ReactNode }) {
    return (
        <p className="fs-5 fw-normal text-primary-emphasis">
            {children}
        </p>
    );
}