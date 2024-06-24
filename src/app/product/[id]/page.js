

const DynamicRoute = ({params}) => {
     console.log(params)
    return (
        <div>
             <h1>This is dynamic route : {params?.id}</h1>
        </div>
    );
};

export default DynamicRoute;