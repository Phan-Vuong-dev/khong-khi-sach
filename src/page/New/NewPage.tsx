import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store/store";
import { fetchPosts } from "../../slices/postSlice";
import HeaderPage from "../../components/HeaderPage";
import CardNew from "../../components/card/CardNew";

const NewPage = () => {
  const dispatch = useDispatch();
  const { posts, loading, hasMore } = useSelector((state) => state.posts);
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 2;

  console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchPosts({ pageIndex, pageSize }));
  }, [pageIndex]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <HeaderPage />
      <div className="min-h-screen pt-[128px] pb-[70px]">
        <div className="flex flex-col gap-[20px] py-[20px]">
          {posts?.map((item, index) => (
            <CardNew
              key={index}
              indexPost={index}
              imgPost={item.photo}
              titlePost={item.name}
              timeDate={item.date || "Ngày không xác định"}
              idPost={item.id}
            />
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Đang tải..." : "Xem thêm"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPage;
