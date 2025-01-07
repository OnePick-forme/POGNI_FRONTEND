"use client";
import Header from "@/app/(user)/components/header";
import * as S from "./style.css";
import Link from "next/link";
import Footer from "@/app/(user)/components/footer";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Coming = () => {
    const [data, setData] = useState({
        address: '',
        information: '',
        contact: '',
        opening_hour: '',
        road: ''
      });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://10.150.150.252:8080/location', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            setData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

  const {MainAddress,OtherText,TellNumber,ComingText,Time}={
    MainAddress:data.address,
    OtherText:data.information,
    TellNumber:data.contact,
    Time:data.opening_hour,
    ComingText:data.road
  }

  return (
    <>
    <Header />
    <div className={S.ComingLayout}>
        <div className={S.ComingTitle}>
            오시는 길
        </div>
        <div className={S.ComingMapContainer}>
            <div className={S.ComingMaps}>

            </div>
            <div className={S.ComingTexts}>
                <div className={S.ComingMainAddress}>
                    {MainAddress}
                </div>
                <div className={S.ComingComents}>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Parking.svg" width={24} height={24}></Image>
                        {OtherText}
                    </div>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Timer.svg" width={24} height={24}></Image>
                        {Time}
                    </div>
                    <div className={S.ComingLogoText}>
                        <Image alt="TellIcon" src="/Tell.svg" width={24} height={24}></Image>
                        {TellNumber}
                    </div>
                </div>
                <div className={S.ComingComing}>
                    <div className={S.ComingComingTitle}>
                        오시는 길
                    </div>
                    <div className={S.ComingText}>
                        {ComingText}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Coming;
