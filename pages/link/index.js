import Link from "next/link";

function LinkPage() {
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li>
                    <a href="/about">About (reload)</a>{/*This will trigger browser reloads*/}
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
};

export default LinkPage;