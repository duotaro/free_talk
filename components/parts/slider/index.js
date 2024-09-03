import React, { useEffect } from 'react';
import SliderDetail from '../slider/detail'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）


export default function SliderList({ sliderList }) {


    return (
        <div className="row m-3">
          <section>
            <Splide
              aria-label="私のお気に入りの画像集"
              options={{
                autoplay: true, // 自動再生を有効
                interval: 3000, // 自動再生の間隔を3秒に設定
                rewind: true
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

