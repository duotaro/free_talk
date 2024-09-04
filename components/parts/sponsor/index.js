import Link from "next/link"

export default function SponsorList({ sponsors }) {
    return (
        <div className=" h-100">
            <div className="card-body p-4">
                <div className="text-center">
                    <a href={sponsors.image1Link}><img className="p-1 w-50" src={sponsors.image1} alt="..." /></a>
                </div>
                <div className="text-center">
                 <a href={sponsors.image2Link}><img className="p-1 w-50" src={sponsors.image2} alt="..." /></a>
                </div>
                <div className="text-center">
                    <a href={sponsors.image3Link}><img className="p-1 w-50" src={sponsors.image3} alt="..." /></a>
                </div>
            </div>
            <div className="card-footer pt-0 border-top-0 bg-transparent">
            </div>
        </div>
    )
};