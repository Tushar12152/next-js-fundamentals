const DynamicRoute = ({params, searchParams}) => {
     console.log(params)
    return (
        <div>
             <h1>This is dynamic route : {params?.id}</h1>
             <h1>search by : {searchParams?.category} , {searchParams?.price}</h1>
        </div>
    );
};

export default DynamicRoute;