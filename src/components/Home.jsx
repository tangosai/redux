import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../redux/slices/images";

const Home = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((response) => response);
  console.log(images);
  const onSubmit = (e) => {
    e.preventDefault();
    const url = e.target[0].value;
    dispatch(addImage(url));
  };
  return (
    <div className="bg-amber-50 min-h-screen flex items-center justify-center">
      <div className="gap-y-6 flex flex-col w-11/12 md:w-6/12">
        <h1 className="text-2xl md:text-6xl font-bold text-violet-600">
          Redux App
        </h1>
        <div>
          <form className="flex flex-col gap-y-3" onSubmit={onSubmit}>
            <input
              type="url"
              required
              placeholder="Enter url here"
              className="border border-violet-600 rounded-lg w-full p-3"
            />
            <div className="flex items-center gap-x-3">
              <button className="bg-violet-600 text-white rounded px-6 py-2.5">
                Submit
              </button>
              <Link to="images" className=" text-gray-500 font-semibold">
                View
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {images.map((item, index) => {
                return (
                  <img
                    src={item}
                    width="480"
                    className="w-full"
                    key={index}
                    onClick={() => dispatch(removeImage(index))}
                  />
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
