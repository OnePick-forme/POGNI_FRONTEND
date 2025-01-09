"use client";
import Header from "@/app/admin/(app)/main/header";
import * as S from "./style.css";
import Footer from "@/app/(user)/components/footer";
import { useEffect, useRef, useState } from "react";
import MainImage from "@/app/admin/components/mainImage";
import CategoryBox from "@/app/admin/components/categoryBox";
import Plusbox from "@/app/admin/components/plusbox";
import OverView from "@/app/admin/(app)/main/overView";
import Memory from "@/app/(user)/(app)/main/memory";
import Load from "@/app/(user)/(app)/main/road";
import News from "@/app/(user)/(app)/main/news";
import axios from "axios";

const Main: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainImageRef = useRef<HTMLDivElement | null>(null);

  const [CategoryData, setCategoryData] = useState([
    {
      name: "",
      content: "",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/hashtag/list`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setCategoryData(response.data);
        console.log("불러온 데이터:", response.data);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const mainImageHeight = mainImageRef.current?.clientHeight ?? 0;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > mainImageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header hasBackground={isScrolled} />
      <div ref={mainImageRef} className={S.MainImages}>
        <MainImage />
      </div>
      <div className={S.CategoryLayout}>
        {CategoryData.map((_, index) => (
          <CategoryBox
            Text={CategoryData[index].content}
            Title={CategoryData[index].name}
            key={index}
            index={index + 1}
          />
        ))}
        <Plusbox />
      </div>
      <OverView />
      <Memory />
      <News />
      <Load />
      <Footer />
    </>
  );
};

export default Main;
