import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { Api } from "../Search";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Modal from "react-modal";
import ImageModal from "./ImageModal/ImageModal";
import { ImgRespons, ApiResponse } from "../types";

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [img, setImg] = useState<ImgRespons[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loadBtn, setLoadBtn] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  Modal.setAppElement("#root");

  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const perPage: number = 12;

  useEffect(() => {
    if (inputText === "") return;

    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        setError(false);
        const data: ApiResponse = await Api(inputText, page, perPage);

        setImg((prevImg) => {
          const updatedImg = [...prevImg, ...data.results];
          setLoadBtn(data.total - updatedImg.length > 0);
          return updatedImg;
        });
      } catch {
        setError(true);
        setLoadBtn(false);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [inputText, page]);

  const loadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={setInputText} setPage={setPage} setImg={setImg} />
      {img.length > 0 && (
        <ImageGallery img={img} onImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {img.length > 0 && loadBtn && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={selectedImage}
      />
    </>
  );
};

export default App;
