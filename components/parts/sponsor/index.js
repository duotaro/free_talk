import Link from "next/link"

export default function SponsorList({ sponsor }) {
    return (
        <div className="text-center p-3" key={sponsor.ordering}>
          <a href={sponsor.link} ><img className="p-1 w-50" src={sponsor.image} alt="..." /></a>
        </div>
    )
};