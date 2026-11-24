'use client';
// import link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Page(){
//     const router = useRouter();
//     return (
//         <div>
//             <h1>Page Kartu Profil</h1>
//             <link href="/detail">
//             <button className="bg-blue-500 rounded-md" onClick={() =>{ alert('tes')}}>Halaman Detail</button>
//             </link>

//             <br />
//             <br />

//             <button className="bg-blue-500 rounded-md" onClick={() => {
//                 router.push('/detail')
//             }}>Halaman Detail</button>
//         </div>
//     );
// }

import { KartuProfil } from "./components/KartuProfil";

export default function Home(){
    return(
        <main className="halaman">
            <h1>Kartu Profil Interaktif</h1>
            <p>Latihan react Hari Pertama.</p>

            {/* Kartu Profil */}
            <KartuProfil nama="Ikhsan" kelas="XII RPL 1" hobi="Bermain Simulator Terbang"/>
            <KartuProfil nama="Lili" kelas="XII RPL 1" hobi="Berenang"/>
            <KartuProfil nama="Budi" kelas="XII RPL 1" hobi="Bermain Futsal"/>

        </main>
    );
}
