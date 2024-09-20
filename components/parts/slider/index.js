import React, { useEffect } from 'react';
import SliderDetail from '../slider/detail'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）


export default function SliderList({ sliderList }) {
    return (
        <div className="mx-auto max-w-3xl">
          <section className='flex flex-col basis-4/5 justify-center '>
            <Splide
              aria-label="日々の光景"
              options={{
                type   : 'loop',
                rewind : true,
                autoplay: true, // 自動再生を有効
                interval: 3000, // 自動再生の間隔を3秒に設定
                perPage: 1,
                width: 768,
                lazyLoad: true ,
                gap: 50,
                padding: 50
              }}
            >
              {sliderList.map((slider) => {
                return <SliderDetail slider={slider}></SliderDetail>
              })}
            </Splide>
          </section>
        </div>
    )
};

