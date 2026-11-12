import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function ResultPage() {

    const [data, setData] = useState([]);

    const jenisKelamin = ["Laki-laki", "Perempuan"];
    const perokok = ["Perokok", "Bukan perokok"];
    const merek = ["Gudang garam filter", "Luck Strike", "Marioboro", "Esse"];

    useEffect(() => {
        let data = [];
        try {
            data = JSON.parse(localStorage.getItem("data") || "[]");
        } catch {
            console.log(
                "failed to load prev data, using default empty storage",
            );
        }
        setData(data);
    }, []);

    return (
        <div className="w-full h-fit flex justify-center items-center flex-col">
            <div className="p-6 w-250 flex justify-start items-center flex-col">
                <table className="border w-full border-slate-600">
                    <thead>
                        <tr className="*:p-2 *:border *:border-slate-700">
                            <th rowSpan={2}>nama</th>
                            <th rowSpan={2}>umur</th>
                            <th colSpan={2}>jenis kelamin</th>
                            <th colSpan={2}>perokok</th>
                            <th colSpan={4}>merek rokok dicoba</th>
                        </tr>
                        <tr className="*:p-2 *:border *:border-slate-700">
                            <th>Laki-laki</th>
                            <th>Perempuan</th>
                            <th>Ya</th>
                            <th>Tidak</th>
                            <th>Marioboro</th>
                            <th>Esse</th>
                            <th>Luck Strike</th>
                            <th>Gudang garam filter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d) => {
                                const result = [
                                    <td key={`${d.nama}-${d.id}`}>{d.nama}</td>,
                                    <td key={`${d.umur}-${d.id}`}>{d.umur}</td>,
                                ];
                                jenisKelamin.forEach((j) => {
                                    result.push(<td key={`${d.nama}-${d.id}${j}`}>{j === d["jenis-kelamin"]? <>&#x2713;</>: ""}</td>);
                                });
                                perokok.forEach((j) => {
                                    result.push(<td key={`${d.nama}-${d.id}${j}`}>{j === d.perokok? <>&#x2713;</>: ""}</td>);
                                });
                                merek.forEach((j,i) => {
                                    result.push(<td key={`${d.nama}-${d.id}${j}`}>{j.includes(d.merek[i])? <>&#x2713;</>: ""}</td>);
                                });
                                return (
                                    <tr className="*:text-center *:p-2 odd:bg-slate-100" key={`${d.nama}${d.umur}-${d.id}`}>{result}</tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Link to="/">Back to form</Link>
        </div>
    );

}
