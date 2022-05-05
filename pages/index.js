import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Home() {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const getApi = (page) => {
    setLoading(true);
    axios
      .get(
        `https://api.itv.uz/api/content/main/2/list?user=a7e1c53165089055120e1a6ffaa1ec27&page=${page}`
      )
      .then((response) => {
        setApi(response.data.data.movies);
        setLoading(false);
        const { items_per_page, total_items } = response.data.data;
        setTotal(Math.ceil(total_items / items_per_page));
        console.log(total);
      });
  };
  useEffect(() => getApi(0), []);

  const handleClick = ({ selected }) => {
    getApi(selected);
  };
  const [value, setValue] = useState("");

  const filteredFilms = api.filter((films) =>
    films.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 ">
      <input
        className="mt-20 bg-slate-200 my-4 p-2 rounded-lg  placeholder:text-sky-900 placeholder:font-semibold
         "
        placeholder="search"
        onChange={(event) => setValue(event.target.value.trim())}
      />
      <div className=" grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:grid-cols-6">
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            {filteredFilms.map((user) => (
              <div
                className=" border-solid mb-8 border-4 rounded-2xl shadow-2xl"
                key={user.id}
              >
                <img className=" w-56 rounded-xl" src={user.files.poster_url} />
                <p className=" text-lg text-center text-sky-900   py-2">
                  {user.title}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      <>
        <ReactPaginate
          containerClassName="flex items-center justify-center mt-8  "
          pageClassName=" m-1 sm:m-2  px-2 sm:px-3  py-0.5 sm:px-3  rounded   text-white bg-sky-900"
          nextClassName="px-0.5 sm:px-3 py-1  rounded m-2  text-white bg-sky-900"
          previousClassName="px-0.5 sm:px-3 py-1  rounded m-2  text-white bg-sky-900 "
          breakLabel="..."
          nextLabel=">"
          onPageChange={handleClick}
          pageRangeDisplayed={2}
          pageCount={total}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    </div>
  );
}
