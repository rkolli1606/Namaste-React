export default Shimmer = ()=>{
    return (
        <>
        <h1>Loading....</h1>
        <div className="shimmer-flex">
        {Array(10).fill("").map((ele,index)=><div key={index} className="shimmer-card"></div>)}
        </div>
        </>
    )
}