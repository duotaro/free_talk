

import { NEWS_GENRES, NEWS_GENRE } from "../../../const";
import Link from "next/link";
import NewsEntity from '../../../entity/newsEntity'

export default function News({ newsList }) {
    console.log(newsList)
  let resList = []
  let latestList = []
  let parentList = []
  let entryList = []
  for(let item of newsList) {
    let res = new NewsEntity(item)
    resList.push(res)
    if(res.tag == NEWS_GENRE.LATEST){
        latestList.push(res)
    }else if(res.tag == NEWS_GENRE.PARENT){
        parentList.push(res)
    }else if(res.tag == NEWS_GENRE.ENTRY){
        entryList.push(res)
    }
  }

  console.log(resList)



  return (
    <section className="card p-2 m-3">
      <div className="text-center">
        <h1>最新情報</h1>
        <p>What's New? - Updated On Oct 17th</p>
      </div>
      <ul class="nav nav-tabs">
        {NEWS_GENRES.map((genre) => {
            return (
            <li class="nav-item">
                <a class="nav-link" aria-current="page" data-bs-target={`#${genre}`}>{genre}</a>
            </li>
            )
        })}
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id={NEWS_GENRE.LATEST}>
          <ul class="list-group list-group-flush">
            {latestList.map((item) => {
                return (
                
                  <li class="list-group-item">
                    <a href={item.url} target="_blank">{item.title}</a>
                  </li>
                )
            })}
            </ul>
        </div>
        <div class="tab-pane" id="parent">
            <img src="images/photo2.jpg" class="img-fluid" alt="写真：猫がソファの隅で寝ている" />
        </div>
        <div class="tab-pane" id="photo3-pane">
            <img src="images/photo3.jpg" class="img-fluid" alt="写真：カメラの方向を向く猫の顔" />
        </div>
      </div>
    </section>
  );
}