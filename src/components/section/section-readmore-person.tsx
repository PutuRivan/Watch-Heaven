import React, { useState } from "react";

interface ReadMoreProps {
  text: string; // Teks biography
  maxLength: number; // Jumlah karakter maksimal yang ditampilkan
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  const [isFullTextShown, setIsFullTextShown] = useState(false);

  const toggleText = () => setIsFullTextShown(!isFullTextShown);

  if (text.length <= maxLength) {
    // Jika teks lebih pendek dari batas, tampilkan teks sepenuhnya
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>{isFullTextShown ? text : `${text.slice(0, maxLength)}...`}</p>
      <button
        onClick={toggleText}
        className="text-blue-500 hover:underline mt-2"
      >
        {isFullTextShown ? "Tutup" : "Baca Selengkapnya"}
      </button>
    </div>
  );
};

export default ReadMore;
