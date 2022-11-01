import { useRouter } from 'next/router';

const DynamicPathPage = () => {
    const router = useRouter();
    
    console.log('router = ', router, ' ; pathname', router.pathname);

    return (
        <div>
            <h1>The Dynamic Path Page</h1>
        </div>
    );
};

export default DynamicPathPage;