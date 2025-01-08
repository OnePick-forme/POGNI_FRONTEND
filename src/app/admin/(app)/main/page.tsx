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

  const CategoryArray = Array.from({ length: 1 });

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
