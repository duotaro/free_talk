import SliderEntity from '../../../entity/sliderEntity.js'
import { SplideSlide } from "@splidejs/react-splide";
export default function SliderDetail({slider}) {
    let post = new SliderEntity(slider)
    return (
        <SplideSlide>
            <div className="card align-middle" style={{backgroundImage:`url('${post.image}')`, minHeight:'360px', backgroundSize:'cover', backgroundPosition:'center center'}}>
                {/* <img className="card-img-top border-bottom img-responsive" src={post.image} alt="..." /> */}
                <div className="card-body p-4 align-middle ">
                    <div className="text-center align-middle">
                        <h5 className="fw-bolder text-white">{post.subTitle}</h5>
                        <h2 className="fw-bolder text-white">{post.title}</h2>
                        <div className="fw-bolder text-white">{post.description}</div>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 align-middle">
                    <div className="text-center">
                    <a className="btn btn-sub-danger mt-auto link text-white " href={post.pageUrl}>
                        {post.linkLabel.split('\n').map(t => (<div>{t}</div>))}
                    </a>
                    </div>
                </div>
            </div>
        </SplideSlide>
    );
}


