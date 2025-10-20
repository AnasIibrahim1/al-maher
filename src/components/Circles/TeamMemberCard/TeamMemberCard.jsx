import "./TeamMember.css";
import SocialButtons from "@/components/Buttons/Solcial Buttons/SocialButtons";
import Link from "next/link";
export default function TeamMemberCard({ id, name, jobTitle, photo }) {
  const Card = (
    <div className="team-member-card" style={{width:"340px", height:"510px", borderRadius:"500px", backgroundColor:"#152B4A", position:"relative", borderBottom:"30px solid #4F5DE4", backgroundImage:`url('${photo || "/photo.jpg"}')`, backgroundSize:"cover", backgroundPosition:"center"}}>

<div className="content" style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
<h3 suppressHydrationWarning style={{color:"#fff", fontSize:"24px", fontWeight:"bold"}}>{name || ''}</h3>
<p suppressHydrationWarning style={{color:"#fff", fontSize:"16px", fontWeight:"bold"}}>{jobTitle || ''}</p>
<div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"10px", marginTop:"10px"}}>
    <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>} backgroundColor="transparent" borderColor="#4F5DE4" />
          
</div>
</div>

    </div>
  );

  if (id) {
    return (
      <Link href={`/teacher/${id}`} style={{textDecoration: "none"}}>
        {Card}
      </Link>
    );
  }

  return Card;
}