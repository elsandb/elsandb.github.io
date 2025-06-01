import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "300"],
    style: "normal",
    subsets: ['latin']
})

export default function Lead({ children }: { children: React.ReactNode }) {
    return (
        <p className={roboto.className + 'fw-light fs-5'}>
            {children}
        </p>
    );
}