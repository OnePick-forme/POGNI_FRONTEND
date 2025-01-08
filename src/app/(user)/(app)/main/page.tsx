"use client";

import Header from "@/app/(user)/(app)/main/Header";
import * as S from "./style.css";
import Footer from "@/app/(user)/components/footer";
import { useEffect, useRef, useState } from "react";
import MainImage from "@/app/(user)/components/MainImage";
import CategoryBox from "@/app/(user)/components/CategoryBox";
import OverView from "@/app/(user)/(app)/main/OverView";
import Memory from "@/app/(user)/(app)/main/memory";
import Load from "@/app/(user)/(app)/main/road";
import News from "@/app/(user)/(app)/main/news";

const Main: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mainImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mainImageHeight = mainImageRef.current?.clientHeight ?? 0;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > mainImageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { CategoryText, CategoryTitle } = {
    CategoryText: "지구도 살리고 여성건강도 살리는 경제적인 면패드",
    CategoryTitle: "포근이슬",
  };

  const CategoryArray = Array.from({ length: 5 });

  return (
    <>
      <Header hasBackground={isScrolled} />
      <div ref={mainImageRef} className={S.MainImages}>
        <MainImage />
      </div>
      <div className={S.CategoryLayout}>
        {CategoryArray.map((_, index) => (
          <CategoryBox Text={CategoryText} Title={CategoryTitle} key={index} />
        ))}
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
