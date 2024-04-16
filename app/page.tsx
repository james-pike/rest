import { title } from "@/components/primitives";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className={title()} style={{ textAlign: 'center' }}>
                Home Page
            </h1>
        </div>
    );
}