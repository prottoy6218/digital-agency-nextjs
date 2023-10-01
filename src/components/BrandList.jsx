async function getData() {
    const res=await fetch(process.env.BASE_URL+"BrandList");
if (!res.ok) {
    throw new Error("BrandList Calling Failed");
    }
    return res.json();
}

const BrandList = async () => {
    const data = await getData();


    return <section className="bg-[#F8FFF9]">
        <div className="container mx-auto py-10">
        <div className="flex flex-col items-center gap-3 md:flex md:flex-row justify-between">
                {
                    data.map((item, i) => {
                        return (
                            
                                <img key={i} src={item['image']} alt="" />
                                
                        )
                    })
                }
            </div>
        </div>
  </section>;
};
export default BrandList;