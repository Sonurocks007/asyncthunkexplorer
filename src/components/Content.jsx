import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentSlice, fetchContent } from "../redux/slice/ContentSlice";

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  console.log(contents);

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return error;
  }

  return (
    <>  
        <h1 className="text-4xl text-center flex justify-center items-center bg-gray-400 text-white h-20">My Products</h1>
        <div className="max-w-full max-h-screen p-4 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-4 bg-gray-100 ">
    
  {contents.map((content) => (
    <div
      key={content.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
    >
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-40 object-contain"
      />
      <div className="p-2">
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2">{content.title}</h2>
        <h2 className="text-sm  text-gray-800 line-clamp-2 font-bold">{content.category}</h2>
      </div>
    </div>
  ))}
</div>

    </>
    
  );
}

export default Content;