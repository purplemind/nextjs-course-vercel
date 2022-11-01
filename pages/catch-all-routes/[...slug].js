import { useRouter } from "next/router";

const CatchAllRoutes = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>Catch-All Routes Page</h1>
        </div>
    )

};

export default CatchAllRoutes;