import React, { useState } from "react";

interface Props {
  items: string[]; // Data yang akan ditampilkan
  limit: number; // Batas jumlah item yang ditampilkan awal
}

const LimitedList: React.FC<Props> = ({ items, limit }) => {
  const [showAll, setShowAll] = useState(false); // State untuk menampilkan semua item

  const toggleShowAll = () => setShowAll(!showAll); // Fungsi toggle untuk tombol

  const displayedItems = showAll ? items : items.slice(0, limit); // Tentukan data yang ditampilkan

  return (
    <div>
      {/* Tampilkan item yang sesuai */}
      {displayedItems.map((item, index) => (
        <p key={index} className="text-lg">
          {item}
        </p>
      ))}

      {/* Tampilkan tombol jika jumlah item lebih dari limit */}
      {items.length > limit && (
        <button
          onClick={toggleShowAll}
          className="text-blue-500 hover:underline mt-2"
        >
          {showAll ? "Tutup" : "Tampilkan Semua"}
        </button>
      )}
    </div>
  );
};

export default LimitedList;
